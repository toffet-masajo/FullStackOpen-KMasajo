import { useState, useEffect } from 'react'

import PersonService from './services/person';
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    PersonService
      .getAll()
      .then(data => {
        setPersons(data);
      });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);
  
  const handleAdd = (event) => {
    event.preventDefault();

    const matches = persons.filter((person) => person.name === newName);
    if(matches.length > 0) {
      if(matches[0].name === newName && matches[0].number === newNumber)
        alert(`${newName} is already added in the phonebook`);
      else if(window.confirm(`${matches[0].name} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedInfo = {...matches[0], number: newNumber};
        PersonService
          .update(updatedInfo)
          .then(data => {
            setPersons(persons.map(person => {
              if(person.id === matches[0].id) {
                person.number = data.number;
              }
              return person;
            }));
          });
      }
    } 
    else {
      const newPerson = { name: newName, number: newNumber };
      PersonService
        .add(newPerson)
        .then(data => {
          setPersons(persons.concat(data));
        });
    }
  };

  const handleDelete = (id) => {
    PersonService
      .del(id)
      .then(res => {
        setPersons(persons.filter(person => person.id !== id));
      });
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
      
      <Persons data={persons} filter={filter} handler={handleDelete} />
    </div>
  )
}

export default App