import './App.css';
import { useState, useEffect } from "react";
import Cities from './cities.json';
import WeatherCards from './Components/WeatherCards';
import './style.css';
import Grid from '@mui/material/Grid';
import bgImg from './images/Header_bg.png'

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/"
}

let citiesList = Cities.List;
console.log(citiesList);

let cityCodeArr = citiesList.map(cityCode => cityCode.CityCode);
console.log(cityCodeArr);

function App() {
  const [search, setSearch] = useState(cityCodeArr);
  const [weatherDetails, setWeatherDetails] = useState([]);

  console.log(weatherDetails);

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_KEY)
    fetchWeatherDetails();
  }, [])

  async function fetchWeatherDetails() {
    try {
      const cacheKey = 'weatherData';
      const cachedData = JSON.parse(localStorage.getItem(cacheKey));

      if (cachedData && cachedData.expirationTime > Date.now()) {
        // Data is still fresh, return it from cache
        setWeatherDetails(cachedData.result.list);
      }
      const response = await fetch(`${api.base}group?id=${search}&units=metric&APPID=${api.key}`);
      const result = await response.json();

      const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutes
      localStorage.setItem(cacheKey, JSON.stringify({ result, expirationTime }));

      setWeatherDetails(result.list);
    } catch (error) {
      console.log(error.message);
      setWeatherDetails([]);
    }
  }

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }} className="App">

      <h1 className="head_1">Weather App</h1>

      <Grid container spacing={5}>
        {weatherDetails.map((item, index) => (
          <Grid sx={{ width: 500, p: 0 }} item xs={12} md={6} className="card-content">
            <WeatherCards
              index={index}
              key={index}
              name={item.name}
              country={item.sys.country}
              temp={item.main.temp}
              tempMax={item.main.temp_max}
              tempMin={item.main.temp_min}
              pressure={item.main.pressure}
              humidity={item.main.humidity}
              visibility={item.visibility}
              speed={item.wind.speed}
              direction={item.wind.deg}
              sunrise={item.sys.sunrise}
              sunset={item.sys.sunset}
              description={item.weather[0].description}
              dateTime={item.dt}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
