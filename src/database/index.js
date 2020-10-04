const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Empresa = require('../models/Empresa');
const Fornecedor = require('../models/Fornecedor');

const connection = new Sequelize(dbConfig);

Empresa.init(connection);
Fornecedor.init(connection);

Empresa.associate(connection.models);
Fornecedor.associate(connection.models);

module.exports = connection;