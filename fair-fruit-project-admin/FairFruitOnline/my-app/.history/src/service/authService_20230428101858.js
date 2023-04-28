import configAxios from "utils/config";
import apiService from "./apiService";


async function asyncAuthService(user) {

    console.log("hey");
    try {
        const res = await configAxios.auth('/api/users/auth', user)
        console.log(res);
        console.log(res.data);
        if (res){
            localStorage.setItem("user", (res.data));
        }

        return res.data;

    } catch (error){
        console.log(error);
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    asyncAuthService,
    logout
}

export default authService;