import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then(res => setCountries(res.data))
      .catch(error => console.log(error));
  }, []);

  const handlerInputChange = (event => setFilter(event.target.value));

  const showContent = () => {
    const list = countries
      .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
      
    if(list.length === 1) {
      const country = list[0];
      return(
        <div key={country.cca2}>
          <h2>{country.name.common}</h2>
          <>
            capital {country.capital.reduce((capitalList, cap) => capitalList.concat(`${cap} `), '')} <br/>
            area {country.area}
          </>
          <h3>languages:</h3>
          <ul>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</ul>
          <img src={`${country.flags['png']}`} alt={`${country.flags['alt']}`} />
        </div>
      );
    } else if(list.length <= 10) {
      return list.map(item => <div key={item.cca2}>{item.name.common}</div>);
    }
    return 'Too many matches, specify another filter'
  }

  return(
    <div>
      <div className="countries-form">find countries <input value={filter} onChange={handlerInputChange} /></div>
      <div className="countries-content"> 
        {filter.length > 0 && showContent()}
      </div>
    </div>  
  );
};

export default App;