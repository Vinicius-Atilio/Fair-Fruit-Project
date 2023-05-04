import apiService from "./apiService";

async function auth(user) {
    console.log("hey");
    try {
        const res = await apiService.auth('/api/users/auth', user)
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
    auth,
    logout
}

export default authService;