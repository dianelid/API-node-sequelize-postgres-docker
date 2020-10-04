'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmpresaFornecedor', {
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
      },
      empresaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Empresa', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fornecedorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Fornecedor', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmpresaFornecedor');
  }
};
