"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_1 = __importDefault(require("../routes/producto"));
const conecction_1 = __importDefault(require("../db/conecction"));
class Server {
    constructor() {
        console.log(process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'get API'
            });
        });
        this.app.use('/api/productos', producto_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
        //cors
        this.app.use((0, cors_1.default)());
    }
    async dbConnect() {
        try {
            await conecction_1.default.authenticate();
            console.log('Database online');
        }
        catch (error) {
            console.log(error);
            console.log('Error al conectar la base de datos');
        }
    }
}
exports.default = Server;
