import axios from "axios";
import { showErrorToast, showToast } from "../components/toast";

class Auth{

    static AuthApi;

    constructor() {

        this.AuthApi = axios.create({
            baseURL : "http://localhost:3000/auth",
            // headers: {
            //     'Content-Type': 'application/json'
            //   }
        });

        this.AuthApi.interceptors.request.use((config) => {
            return config;
        }, (error) => {
            if (error.response && error.response.data && error.response.data.message) {
                showErrorToast(error.response.data.message)
                console.error(error.response.data.message);
            } else {
                showErrorToast(`Error: ${error.message}`);
            }
            console.error('Error:', error.message);
            return Promise.reject(error);
        });

        this.AuthApi.interceptors.response.use((response) => {
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
            }
            if(response.data.message){
                showToast(response.data.message);
            }
            return response;
        }, (error) => {
            if (error.response && error.response.data && error.response.data.message) {
                showErrorToast(error.response.data.message)
                console.error(error.response.data.message);
            } else {
                showErrorToast(`Server Error: ${error.message}`);
            }
            console.error('Server Error:', error.message);
            return Promise.reject(error);
        });
    }

    async login(email, password){
        try{
            const response = await this.AuthApi.post('/login', {
                email : email,
                password : password
            });

            if(response.status==200){return true;}
            else{
                return false;
            }
        } catch (e) {
            console.error(e.message);
            return false;
        }

    }


    async register(name, email, password){
        try{
            const response = await this.AuthApi.post('/register', {
                name : name,
                email : email,
                password : password
            });

            if(response.status==200){return true;}
            else{
                console.error(response.data);
                return false;
            }
        } catch (e) {
            console.error(e.message);
            return false;
        }
    }

}

export default Auth;