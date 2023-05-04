import configAxios from "utils/config";
import apiService from "./apiService";


async function auth(user) {
    console.log("authService");
    console.log(user);
    try {
        const res = await configAxios.auth('/api/users/auth', user)
        if (res){
            localStorage.setItem("user", (res.data));
        }

        return res.data;

    } catch (error){
        console.log(error);
    }
};

async function register(user) {
    console.log("register");
    console.log(user);
    try {
        const res = await configAxios.post('/api/users', user)
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
    auth,
    register,
    logout
}

export default authService;