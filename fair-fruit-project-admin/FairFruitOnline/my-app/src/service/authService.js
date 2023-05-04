import configAxios from "utils/config";
import apiService from "./apiService";


async function auth(user) {
    console.log("authService");
    console.log(user);
    try {
        const res = await configAxios.auth('/api/users/auth', user);
        if (res){
            localStorage.setItem("user", (res.data));
        }

        console.log(res);

        return res.data;

    } catch (error){
        return error;
    }
};

async function register(user) {
    console.log("register");
    console.log(user);
    const res = await configAxios.post('/api/users', user)
    if (res){
        localStorage.setItem("user", (res.data));
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