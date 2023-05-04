import axios from 'axios';
import { createContext, useContext, useState } from 'react';


export default function FormComponent() {

  function sendUser(params) {
    const user = async (event) => {
        event.preventDefault();
        const newUser = {
          name: params.userName,
          cpf: params.userDoc,
          birthDate: params.userBirthDate,
          email: params.userEmail,
          login: params.userLogin,
          password: params.userPassword,
          balance: params.userBalance,
          admin: params.userType,
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
  }



  // define other handle*Change functions for other form inputs


    return {
        sendUser
    };
};
