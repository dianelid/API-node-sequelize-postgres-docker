const express = require('express');
const EmpresaController = require('./controllers/Empresa');
const FornecedorController = require('./controllers/Fornecedor');

const routes = express.Router();

/* CRUD Empresa*/
routes.post('/empresas', EmpresaController.createEmpresa);
routes.get('/empresas', EmpresaController.getAllEmpresas);
routes.put('/empresas/:empresaId', EmpresaController.updateEmpresa);
routes.delete('/empresas/:empresaId', EmpresaController.deleteEmpresa);
routes.post('/empresas/:empresaId/fornecedores/:fornecedorId', EmpresaController.associateToFornecedor);
routes.delete('/empresas/:empresaId/fornecedores/:fornecedorId', EmpresaController.disassociateToFornecedor);

/* CRUD Fornecedor*/
routes.post('/fornecedores', FornecedorController.createFornecedor);
routes.get('/fornecedores', FornecedorController.getAllFornecedores);
routes.put('/fornecedores/:fornecedorId', FornecedorController.updateFornecedor);
routes.delete('/fornecedores/:fornecedorId', FornecedorController.deleteFornecedor);

module.exports = routes;