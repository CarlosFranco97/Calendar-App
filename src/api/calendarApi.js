import axios from 'axios' ; 
import { getEnvVariables } from '../helpers';

const {VITE_API_URL} = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
}); 

//Configurando interceptores para mantener mi estado de autenticacion
 calendarApi.interceptors.request.use(config => {
    
    //añadir y modificar headers:
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
 })
export default calendarApi;