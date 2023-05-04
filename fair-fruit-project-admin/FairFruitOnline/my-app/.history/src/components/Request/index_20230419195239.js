import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export default function postAuth(login, password){
    const response = axios.post('/api/users/auth', {
            login,
            password
        });
        console.log(response);
        console.log(response.data);
        
    };

