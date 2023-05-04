import apiService from "./apiService";

async function register(user) {
    console.log("hey");
    try {
        const res = await apiService.auth('/api/users/auth', user)
        console.log(res);
        console.log(res.data);
        if (res){
            localStorage.setItem("user", (res.data));
        }

    } catch (error){
        console.log(error);
    }
}

const authService = {
    register
}

export default authService;