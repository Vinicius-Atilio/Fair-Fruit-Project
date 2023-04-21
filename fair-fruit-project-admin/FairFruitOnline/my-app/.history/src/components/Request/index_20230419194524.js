import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export function postAuth(login, password){
const signIn = async (login, password) => {
    try {
        const response = await axios.post('/api/users/auth', {
            login,
            password
        });
        console.log(response.data);
        } catch (error) {
        console.error(error);
        }
    };
    return signIn;
}