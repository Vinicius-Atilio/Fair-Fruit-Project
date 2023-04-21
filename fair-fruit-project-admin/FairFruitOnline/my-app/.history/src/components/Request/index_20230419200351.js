import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export async function postAuth(login, password) {
    const response = await axios.post('/api/users/auth', {
            login,
            password
        });
        console.log(response);
        console.log(response.data);
        
    };

export async function singUp(userName, userDoc, userBirthDate, userEmail, userLogin, userPassword, userType, userBalance) {
    const response = await axios.post('/api/users', {
            userName, userDoc, userBirthDate, userEmail, userLogin, userPassword, userType, userBalance
        });
        console.log(response);
        console.log(response.data);
        
    };

export default singUp;
    
