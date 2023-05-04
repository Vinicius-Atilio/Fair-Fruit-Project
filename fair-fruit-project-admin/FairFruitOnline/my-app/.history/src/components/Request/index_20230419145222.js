import axios from 'axios';
import { createContext, useContext, useState } from 'react';

function Request() {

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
    
    
    const singUp = async (name, doc, birthDate, email, login, password, type, balance) => {
        try {
            const response = await axios.post('/api/users', {
                name,
                doc,
                birthDate,
                email,
                login,
                password,
                type,
                balance
            });
            console.log(response.data);
            } catch (error) {
            console.error(error);
        }
    };
    
}
    
export default Request;