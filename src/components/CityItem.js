import React from 'react'

function CityItem (props) {
    return (
        <div className="city-item">
            <div className="wrapper">
                <div className="wrapper-item"><span>{ props.data.city_name }</span></div>
                <div className="wrapper-item-empty"> </div>
                <div className="wrapper-item-empty"> </div>
            </div>
            { props.data.brands.map((brand, key) =>
                <div key={key} className="wrapper">
                    <div className="wrapper-item-empty"> </div>
                    <div className="wrapper-item"><span>{ brand.brand_name }</span></div>
                    <div className="wrapper-item"><span>{ brand.employee_count }</span></div>
                </div>
            ) }
        </div>
    )
}

export default CityItem;