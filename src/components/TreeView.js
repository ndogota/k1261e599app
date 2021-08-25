import React, { useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import CityItem from "./CityItem"

function TreeView() {
    const [cityList, updateCityList] = useState([])

    useEffect(() => {
        fetch("/.netlify/functions/k1261e599-api")
            .then(response => response.json())
            .then(json => updateCityList(json.data))
    }, [])

    function handleOnDragEnd(result) {
        if(result.destination)
            if(result.source.index > result.destination.index) {
                const items = Array.from(cityList)
                const [reorderedItem] = items.splice(result.source.index, 1)
                items.splice(result.destination.index, 0, reorderedItem)
                updateCityList(items)
            }
    }

    if (cityList) {
        return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="city-list">
                    {(provided) => (
                        <div className="city-list" {...provided.droppableProps} ref={provided.innerRef}>
                            { cityList.map(({id, city_name, brands}, index) =>
                                <Draggable key={id} draggableId={city_name} index={index}>
                                    {(provided) => (
                                        <div className="city-item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <CityItem
                                                city_name={city_name}
                                                brands={brands}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ) }
                            { provided.placeholder }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    } else
        return <div>Loading...</div>
}

export default TreeView
