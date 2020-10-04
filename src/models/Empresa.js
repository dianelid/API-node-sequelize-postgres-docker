const { Model, DataTypes } = require('sequelize');

class Empresa extends Model {
  static init(sequelize) {
    super.init({
      nomeFantasia: DataTypes.STRING,
      uf: DataTypes.STRING,
      cnpj: DataTypes.STRING,
    },
    {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Fornecedor, {
      foreignKey: 'empresaId',
      through: 'EmpresaFornecedor',
      as: 'fornecedores'
    });
  }
}

module.exports = Empresa;