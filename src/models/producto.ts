import db from '../db/conecction';
import { DataTypes } from 'sequelize';



  
const Producto = db.define('productos', {
    name: {
        type: DataTypes.STRING
    },
    description : {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
}); 
export default Producto;