const express =  require('express');
const cors =  require('cors');

class Server {
    constructor() {
        this.app = express();
        this.middleware();
    }

    middleware() {
        this.app.use(express.json());
        // CORS
        this.app.use((req, res, next) => {
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Access-Controll-Allow-Methods", "Access, Content-Type, Authorization, Acept, Origin, X-Requested-With");
            this.app.use(cors());
            next();
        });
    }
}

module.exports = new Server().app;