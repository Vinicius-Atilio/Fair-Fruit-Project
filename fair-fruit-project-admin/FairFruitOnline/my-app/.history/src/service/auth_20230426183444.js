const { default: apiService } = require("./apiService");



const register = apiService.auth('/api/users/auth', register)