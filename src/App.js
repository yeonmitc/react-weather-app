import { useState , useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
function App() {

  const[weather ,setWeather] = useState(null)
  const [city, setCity] = useState('');
  const cities =['Chicago','osaka' ,'tokyo', 'busan' ,'London' ]
  const [loading, setLoading] =useState(false)
  const key=process.env.REACT_APP_API_KEY;

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;  
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);    
    });
  }

  const getWeatherByCurrentLocation = (lat, lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    setLoading(true);
    getWeatherData(url);
  }

  const getWeatherData = async (url)=> {
    try{
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setWeather(data);

    }catch(error){
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  }

  const getWeatherByCity = ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    getWeatherData(url);
  }

useEffect(()=>{

  if(!!city) getWeatherByCity()
  else getCurrentLocation();
  
},[city]);




  return (
<>
{loading ? <div className="spinner"></div> : <>  <WeatherBox weather ={weather}/>
<WeatherButton cities={cities} setCity={setCity}/></>}

</>
  );
}

export default App;
