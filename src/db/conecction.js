"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const sequelize = new Sequelize('primer_final', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
