import { UserContext } from 'common/contexts/User';
import { useContext } from 'react';
import apiService from './apiService';


function Auth(){
    const { login, password } = useContext(UserContext);

    const user = {
        login,
        password
    }
    
    const register = apiService.auth('/api/users/auth', register)
}




