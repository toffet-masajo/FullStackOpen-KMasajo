import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Country = ({country}) => {
  const [weather, setWeather] = useState(null);
  const flags = country.flags;
  const capital = country.capital
        .reduce((capitalList, cap) => capitalList.concat(`${cap} `), '')
        .trim();

  useEffect(() => {
    function getWeather (capital)  {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${capital}`)
        .then(res => setWeather(res.data))
        .catch(error => console.log(error));
    }
    getWeather(capital);
  }, []);

  return( 
    <div>
      <h2>{country.name.common}</h2>
      <>
        capital {capital} <br/>
        area {country.area}
      </>
      <h3>languages:</h3>
      <ul>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</ul>
      <img src={`${flags['png']}`} alt={`${flags['alt']}`} />
      <h2>Weather in {capital}</h2>
      { (weather) && 
        <>
          temperature {weather.current.temp_c} Celsius<br/>
          <img src={`http:${weather.current.condition.icon}`} alt={weather.current.condition.text} /><br/>
          wind {weather.current.wind_kph} km/h<br/>
        </>
      }
    </div>
  );
};

export default Country;