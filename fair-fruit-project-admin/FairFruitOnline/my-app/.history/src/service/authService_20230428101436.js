import apiService from "./apiService";

import {auth} from "../utils/config";


async function authService(user) {

    console.log("hey");
    try {
        const res = await auth('/api/users/auth', user)
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
    auth: authService,
    logout
}

export default authService;