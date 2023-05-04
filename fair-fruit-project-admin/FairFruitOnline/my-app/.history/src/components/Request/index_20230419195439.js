import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export default async function postAuth(login, password) {
    const response = await axios.post('/api/users/auth', {
            login,
            password
        });
        console.log(response);
        console.log(response.data);
        
    };

