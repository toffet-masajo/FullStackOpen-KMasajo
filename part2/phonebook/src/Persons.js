
const Persons = ({data, filter, handler}) => {

  const delButton = ({name, id}) => {
    if( window.confirm(`Delete ${name}?`) ) handler(id);
  }

  return(
    <>
      { data
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => 
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => delButton(person)}>delete</button>
          </div>
          )
        }
    </>
  )
}

export default Persons;