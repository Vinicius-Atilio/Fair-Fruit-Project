const express =  require('express');
const cors =  require('cors');
const routes =  require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');


class Server {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.swagger();
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

    routes() {
        this.app.use(routes);
    }

    swagger() {
        this.app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
}

module.exports = new Server().app;