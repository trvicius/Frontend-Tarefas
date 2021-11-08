import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://backendtarefa.herokuapp.com/'
})
 
export default api;