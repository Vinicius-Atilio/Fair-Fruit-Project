import axios from 'axios';
import { createContext, useContext, useState } from 'react';


export default function FormComponent() {

  const [userName, setUserName] = useState('');
  const [userDoc, setUserDoc] = useState(0);
  const [userBirthDate, setUserBirthDate] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [userType, setUserType] = useState(false); 

  function sendUser(params) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
          name: userName,
          cpf: userDoc,
          birthDate: userBirthDate,
          email: userEmail,
          login: userLogin,
          password: userPassword,
          balance: userBalance,
          admin: userType,
        };
        try {
          const response = await axios.post('/api/users', newUser);
          const data = response.data;
          setUserName('');
          setUserBirthDate('');
          setUserEmail('');
          setUserLogin('');
          setUserPassword('');
          setUserDoc(0);
          setUserBalance(0);
          setUserType(Boolean);
          console.log(data);
          // do something with the response data
        } catch (error) {
          console.log(error);
        }
      };
  }

  

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  // define other handle*Change functions for other form inputs

  return {
    sendUser
  };

};
