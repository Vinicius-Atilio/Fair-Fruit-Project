import axios from 'axios';
import { createContext, useContext, useState } from 'react';


export default function FormComponent() {

    const sing = async (login, password) => {
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



    // const sendUser = async (name, doc, birthDate, email, login, password, type, balance) => {
    //   try {
    //     const response = await axios.post('/api/users', {
    //       name,
    //       doc,
    //       birthDate,
    //       email,
    //       login,
    //       password,
    //       type,
    //       balance
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  
    return {sing} ;
};
