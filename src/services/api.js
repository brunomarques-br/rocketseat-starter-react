import Axios from 'axios';

//const api = Axios.create({baseURL:'http://localhost:3001/api'});

const api = Axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;