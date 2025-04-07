import React from 'react'

// weatherButton 은 app 의 setCity를 불러와서 호출해줄것이다 
const WeatherButton = ({cities , setCity, selectedCity}) => {


  return (
    <div className="btn-container">
        <button 
            className={`btn ${selectedCity === "" ? 'active' : ''}`}
            onClick={() => setCity("")}
        > 
            Current Location
        </button>

        {cities?.map((item, index) => (
            <button 
                className={`btn ${selectedCity === item ? 'active' : ''}`}
                key={index}
                onClick={() => setCity(item)}
            > 
                {item}
            </button>
        ))}
    </div>
)
}

export default WeatherButton
