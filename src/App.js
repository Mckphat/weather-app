import React, {useState} from 'react';

function App() {

  const apikey = '072d36bef51d7eb8706d4a4e9dd395c2'
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apikey}`).then(
        response => response.json()).then(data =>{
          setWeatherData(data)
          setLocation("")
        })
      }
    }

    const dateBuild = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }

  return (
    <div className = "App">
      <main>
        <div className = "search-box">
          <input 
            type="text"
            className = "search-bar"
            placeholder = "Enter city"
            onChange={e => setLocation(e.target.value)}
            value = {location}
            onKeyPress = {getWeather}
          />
        </div>

          {typeof weatherData.main === 'undefined' ? (
            <div>
            </div>

          ):(
            <div>
              <div className = 'location-box'>
                <div className = 'location'>{weatherData.name}</div>
                <div className = "date">{dateBuild(new Date())}</div>
              </div>

              <div className = "weather-box">
                <div className = "temp">{Math.round(weatherData.main.temp)}°F</div>
              </div>
              <div className = "weather">{weatherData.weather[0].main}</div>
            </div>

          
          )}
      </main>
    </div>
  );
}

export default App;




      