import { useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);
  
  const handleAdd = (event) => {
    event.preventDefault();

    if(persons.filter((person) => person.name === newName).length > 0) 
      alert(`${newName} is already added in the phonebook`);
    else setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length+1 }));
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} handler={handleFilterChange} />
      
      <h3>Add a new</h3>
      
      <PersonForm 
        name={newName} 
        nameHandler={handleNameChange} 
        number={newNumber}
        numberHandler={handleNumberChange}
        formHandler={handleAdd}
        />
      
      <h3>Numbers</h3>
      
      <Persons data={persons} filter={filter} />
    </div>
  )
}

export default App