"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = async (req, res) => {
    const listProducts = await producto_1.default.findAll();
    res.json(listProducts);
};
exports.getProducts = getProducts;
const getProduct = async (req, res) => {
    const { id } = req.params;
    const product = await producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
};
exports.getProduct = getProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await producto_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
    else {
        await product.destroy();
        res.json({
            msg: `Producto eliminado`
        });
    }
};
exports.deleteProduct = deleteProduct;
const postProduct = async (req, res) => {
    const { body } = req;
    try {
        await producto_1.default.create(body);
        res.json({
            msg: 'Post Product',
            body
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Hable con el administrador'
        });
    }
};
exports.postProduct = postProduct;
const updateProduct = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = await producto_1.default.findByPk(id);
        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
exports.updateProduct = updateProduct;
