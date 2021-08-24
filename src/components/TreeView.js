import React, { useState, useEffect } from 'react';
import CityItem from "./CityItem";

function TreeView() {
    const [data, setData] = useState({ data: null })

    useEffect(() => {
        fetch("/.netlify/functions/k1261e599-api")
            .then(response => response.json())
            .then(json => setData({ data: json.data }))
    }, [])

    if (data.data) {
        return (
            <div>
                { data.data.map((data, key) =>
                    <CityItem
                        key={key}
                        data={data}
                    />
                ) }
            </div>
        )
    } else
        return <div>Loading...</div>
}

export default TreeView
