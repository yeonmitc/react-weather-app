import React from 'react'


const WeatherBox = ({weather}) => {
  if (!weather) {
    return <div>Loading Weather...</div>; // Or some other placeholder
  }
  const icon = weather?.weather[0]?.icon || '01d';
  const number = String(icon).slice(0, 2);
  const imgUrl = `/img/SKY${number}.png`;
  return (
    <div className="weather-container">
      <div>{weather?.name}</div>
      <h2> {weather?.main.temp} ℃ / { Math.round((weather?.main.temp * 9/5) +32 )} ℉</h2>
      <h3> {weather?.weather[0].description}</h3>
      <img  src={imgUrl} alt='맑음' />

    </div>
  )
}

export default WeatherBox
