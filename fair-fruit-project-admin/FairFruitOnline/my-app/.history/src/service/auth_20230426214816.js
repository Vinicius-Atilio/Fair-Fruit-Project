import { UserContext } from 'common/contexts/User';
import { useContext } from 'react';


const { default: apiService } = require("./apiService");

function Auth(){
    const { login, password } = useContext(UserContext);

    const user = {
        login,
        password
    }
    
    const register = apiService.auth('/api/users/auth', register)
}




