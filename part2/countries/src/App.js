import { useState, useEffect } from 'react';
import axios from 'axios';

import CountriesList from './CountriesList';
import Filter from './Filter';

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    axios.get(COUNTRIES_URL)
      .then(res => setCountries(res.data))
      .catch(error => console.log(error));
  }, []);
  
  const handlerInputChange = (event => setSearchString(event.target.value));
  const handlerShowButton = (value => setSearchString(value));

  return(
    <div>
      <Filter value={searchString} handler={handlerInputChange} />
      
      { searchString.length > 0 && 
        <CountriesList 
          data={countries} 
          searchFilter={searchString} 
          handler={handlerShowButton} 
        />
      }
    </div>  
  );
};

export default App;