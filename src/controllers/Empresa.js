const Empresa = require('../models/Empresa');
const Fornecedor = require('../models/Fornecedor');

module.exports = {
  async createEmpresa(req, resp) {
    const { nomeFantasia, uf, cnpj } = req.body;

    const empresa = await Empresa.create({ nomeFantasia, uf, cnpj });

    return resp.json(empresa);
  },
  async getAllEmpresas(req, resp) {
    const empresas = await Empresa.findAll();
    
    return resp.json(empresas);
  },
  async updateEmpresa(req, resp) {
    const { empresaId } = req.params;
    const { nomeFantasia, uf, cnpj } = req.body;
    
    const empresa = await Empresa.findByPk(empresaId);

    if (!empresa) {
      return resp.status(400).json({ error: 'Empresa não encontrada' });
    }
    
    await empresa.update({ nomeFantasia, uf, cnpj });

    return resp.json(empresa);
  },
  async deleteEmpresa(req, resp) {
    const { empresaId } = req.params;
    const empresa = await Empresa.findByPk(empresaId);

    if (!empresa) {
      return resp.status(400).json({ error: 'Empresa não encontrada' });
    }
    
    await empresa.destroy(empresa);

    return resp.status(200).json({ success: 'Empresa removida' });
  },
  async associateToFornecedor(req, resp) {
    const { empresaId } = req.params;
    const { fornecedorId } = req.params;

    const empresa = await Empresa.findByPk(empresaId);
    const fornecedor = await Fornecedor.findByPk(fornecedorId);

    if (!empresa) {
      return resp.status(400).json({ error: 'Empresa não encontrada' });
    }

    if (!fornecedor) {
      return resp.status(400).json({ error: 'Fornecedor não encontrado' });
    }
    
    await fornecedor.addEmpresa(empresa);

    return resp.status(200).json({ success: 'Associação criada' });
  },
  async disassociateToFornecedor(req, resp) {
    const { empresaId } = req.params;
    const { fornecedorId } = req.params;

    const empresa = await Empresa.findByPk(empresaId);
    const fornecedor = await Fornecedor.findByPk(fornecedorId);

    if (!empresa) {
      return resp.status(400).json({ error: 'Empresa não encontrada' });
    }

    if (!fornecedor) {
      return resp.status(400).json({ error: 'Fornecedor não encontrado' });
    }
    
    await fornecedor.removeEmpresa(empresa);

    return resp.status(200).json({ success: 'Associação removida' });
  }
};