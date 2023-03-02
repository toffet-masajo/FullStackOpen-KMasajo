import { useState, useEffect } from 'react'
import axios from "axios"

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);
  
  const handleAdd = (event) => {
    event.preventDefault();

    if(persons.filter((person) => person.name === newName).length > 0) 
      alert(`${newName} is already added in the phonebook`);
    else {
      const newPerson = { name: newName, number: newNumber };
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data));
        });
    }
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