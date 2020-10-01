const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf_cnpj: DataTypes.STRING,
      rg: DataTypes.STRING,
      nascimento: DataTypes.DATE,
    },
    {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Empresa, {
      foreignKey: 'fornecedorId',
      through: 'EmpresaFornecedor',
      as: 'empresas'
    });
  }
}

module.exports = Fornecedor;