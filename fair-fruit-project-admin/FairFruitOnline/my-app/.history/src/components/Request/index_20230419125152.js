import axios from 'axios';
import { createContext, useContext, useState } from 'react';


export default function FormComponent() {
    const sendUser = async (name, doc, birthDate, email, login, password, type, balance) => {
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
  
    return sendUser;
  }
