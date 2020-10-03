module.exports = {
  dialect: 'postgres',
  host: '172.24.202.60',
  username: 'postgres',
  password: 'postgres',
  database: 'sqlnode',
  define: {
    timestamps: true,
    freezeTableName: true,
  },
};