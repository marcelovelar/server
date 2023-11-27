import express, {Application, Request, Response } from 'express';
import cors from 'cors';
import routeProducto from '../routes/producto';
import db from '../db/conecction';


class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        console.log(process.env.PORT);
        this.app = express();
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

    routes () {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'get API'
            });
        });
        this.app.use('/api/productos', routeProducto);
    }

    midlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));

        //cors
        this.app.use(cors());
    }
    
    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error);
            console.log('Error al conectar la base de datos');
        }
         
    }

}

export default Server;  