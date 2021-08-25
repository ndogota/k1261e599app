import React from 'react'

function CityItem (props) {
    return (
        <>
            <div className="wrapper">
                <div className="wrapper-item wrapper-main"><span>{ props.city_name }</span></div>
                <div></div>
                <div></div>
            </div>
            { props.brands.map((brand, key) =>
                <div key={key} className="wrapper">
                    <div></div>
                    <div className="wrapper-item"><span>{ brand.brand_name }</span></div>
                    <div className="wrapper-item"><span>{ brand.employee_count }</span></div>
                </div>
            ) }
        </>
    )
}

export default CityItem;