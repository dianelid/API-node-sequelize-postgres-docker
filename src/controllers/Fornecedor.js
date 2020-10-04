const Fornecedor = require('../models/Fornecedor');

module.exports = {
  async createFornecedor(req, resp) {
    const { nome, email, cpf_cnpj, rg, nascimento } = req.body;

    const fornecedor = await Fornecedor.create({ nome, email, cpf_cnpj, rg, nascimento });

    return resp.json(fornecedor);
  },
  async getAllFornecedores(req, resp) {
    const fornecedores = await Fornecedor.findAll();
    
    return resp.json(fornecedores);
  },
  async updateFornecedor(req, resp) {
    const { fornecedorId } = req.params;
    const { nome, email, cpf_cnpj, rg, nascimento } = req.body;
    
    const fornecedor = await Fornecedor.findByPk(fornecedorId);

    if (!fornecedor) {
      return resp.status(400).json({ error: 'Fornecedor não encontrado' });
    }
    
    await fornecedor.update({ nome, email, cpf_cnpj, rg, nascimento });

    return resp.json(fornecedor);
  },
  async deleteFornecedor(req, resp) {
    const { fornecedorId } = req.params;
    const fornecedor = await Fornecedor.findByPk(fornecedorId);

    if (!fornecedor) {
      return resp.status(400).json({ error: 'Fornecedor não encontrado' });
    }
    
    await fornecedor.destroy(fornecedor);

    return resp.status(200).json({ success: 'Fornecedor removido' });
  }
};