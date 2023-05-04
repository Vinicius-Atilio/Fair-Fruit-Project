import axios from 'axios';
import { createContext, useContext, useState } from 'react';


export default function FormComponent() {

    const sendUser = async (event) => {
        event.preventDefault();
        const newUser = {
          name: event.userName,
          cpf: event.userDoc,
          birthDate: event.userBirthDate,
          email: event.userEmail,
          login: event.userLogin,
          password: event.userPassword,
          balance: event.userBalance,
          admin: event.userType,
        };
        try {
          const response = await axios.post('/api/users', newUser);
          const data = response.data;
          console.log(data);
          // do something with the response data
        } catch (error) {
          console.log(error);
        };
    }




  // define other handle*Change functions for other form inputs


    return {
        sendUser
    };
};
