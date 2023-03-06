import { useState, useEffect } from 'react'

import PersonService from './services/person';
import Filter from './Filter';
import Message from './Message';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState({message: null, type: null});
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
                setMessage({message: `Updated ${person.name}'s number`, type: 'ok'});
                setTimeout(() => {
                  setMessage({message: null, type: null});
                }, 5000);
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
          setMessage({message: `Added ${newName}`, type: 'ok'});
          setTimeout(() => {
            setMessage({message: null, type: null});
          }, 5000);
        });
    }
  };

  const handleDelete = (id) => {
    PersonService
      .del(id)
      .then(res => {
        setPersons(persons.filter(person => {
          if(person.id !== id) return person;
          
          setMessage({message: `Deleted ${person.name}`, type: 'ok'});
          setTimeout(() => {
            setMessage({message: null, type: null});
          }, 5000);
          return null;
        }));
      })
      .catch(error => {
        const person = persons.filter(item => item.id === id);
        setMessage({message: `Information of ${person[0].name} has already been removed from server`, type: 'ng'});
          setTimeout(() => {
            setPersons(persons.filter(item => item.id !== id));
            setMessage({message: null, type: null});
          }, 5000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Message value={message.message} type={message.type} />

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