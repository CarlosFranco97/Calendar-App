import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";


export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch(); 

    // el proceso del login
    const startLogin = async({email, password}) => {
        dispatch(onChecking());
        try {
            const {data} = await calendarApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            //fecha en la que cree el token: 
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}));
        } catch (error) {   
            dispatch(onLogout('Credenciales Incorrectas'));
            //Para limpiar el error en mi authSlice:
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    };

    const startRegister = async({name, email, password}) => {
        dispatch(onChecking());
        try {
            const {data} = await calendarApi.post('/auth/new', {name, email, password});
            localStorage.setItem('token', data.token); 
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch(error) {
            dispatch(onLogout(error.response.data?.msg || ''));
            //Para limpiar el error en mi authSlice:
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    };

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout());
        try {
            const {data} = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}));
        } catch(error) {

        }
    };

    const startLogout = () => {
        //funcion sincrona por lo tanto sin async;

        localStorage.clear();
        dispatch(onLogoutCalendar())
        dispatch(onLogout())
    }
   
    return {     
        //*Propiedades
        errorMessage, 
        status,
        user,
        //*Metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}