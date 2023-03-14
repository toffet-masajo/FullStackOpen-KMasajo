import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = () => {
  const req = axios.get(url);
  return req.then(res => res.data);
};

const add = (person) => {
  const req = axios.post(url, person);
  return req.then(res => res.data);
};

const update = (person) => {
  const req = axios.put(`${url}/${person.id}`, person);
  return req.then(res => res.data);
};

const del = (id) => {
  const req = axios.delete(`${url}/${id}`);
  return req.then(res => res);
}

export default {getAll, add, update, del};