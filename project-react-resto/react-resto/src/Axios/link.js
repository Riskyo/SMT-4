import axios from 'axios';

const url = "http://127.0.0.1:8000/api";
    let token = "a3zgUOGQkcVqFKYc56zOPqzUIRnbgZ69pOGvZaYQ";

    export const link = axios.create({
        baseURL : url,
        headers : {
            'api_token' : token
        },
    });
