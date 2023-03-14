import Country from './Country';

const CountriesList = ({data, searchFilter, handler}) => {
  const list = data
    .filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()));
 
  const showButton = (name) => handler(name);

  if (list.length === 1) 
    return <Country country={list[0]} />
  else if (list.length <= 10)
    return (
        <div>
        { list.map(item =>
            <div key={item.cca2}>
                {item.name.common}
                <button onClick={() => showButton(item.name.common)}>
                show
                </button>
            </div>
          )
        }
        </div>
    );
  
    return (<div>Too many matches, specify another filter</div>);
};

export default CountriesList;