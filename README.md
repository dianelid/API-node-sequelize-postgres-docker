# API-node-sequelize-postgres-docker

Tecnologias utilizadas:
* Node
* Express
* Sequelize
* Docker
* Docker-compose
* PostgreSQL

## Execução
1º No terminal, inicialize o docker: `docker run -d -p 3001:3001 docker/container`
2º No arquivo src/config/datadase.js, altere o endereço do host inserindo o endereço ip do container docker
3º No terminal, execute as migrations do sequelize para criar as tabelas do banco de dados: `yarn sequelize db:migrate`
4º No terminal, execute `docker-compose up`

## Chamadas do Postman
### Entidade Empresa
* Cadastrar Empresa:
  * Método HTTP: POST
  * Chamada: localhost:3001/empresas
  * Content JSON: {"nomeFantasia": "*nome*", "uf": "*uf*", "cnpj": "*cnpj*"}
* Consultar Empresas:
  * Método HTTP: GET
  * Chamada: localhost:3001/empresas
* Alterar Empresa:
  * Método HTTP: PUT
  * Parmâmetro: Id da empresa
  * Chamada: localhost:3001/empresas/*id_empresa*
  * Content JSON: {"nomeFantasia": "*nome*", "uf": "*uf*", "cnpj": "*cnpj*"}
* Deletar Empresa:
  * Método HTTP: DELETE
  * Parmâmetro: Id da empresa
  * Chamada: localhost:3001/empresas/*id_empresa*
* Associar Fornecedor a Empresa:
  * Método HTTP: POST
  * Parmâmetro: Id da empresa e Id do fornecedor
  * Chamada: localhost:3001/empresas/*id_empresa*/fornecedores/*id_fornecedor*
* Desassociar Fornecedor e Empresa:
  * Método HTTP: DELETE
  * Parmâmetro: Id da empresa e Id do fornecedor
  * Chamada: localhost:3001/empresas/*id_empresa*/fornecedores/*id_fornecedor*
### Entidade Fornecedor
* Cadastrar Fornecedor:
  * Método HTTP: POST
  * Chamada: localhost:3001/fornecedores
  * Content JSON: {"nome": "*nome*", "email": "*email*", "cpf_cnpj": "*cpf ou cnpj*", "rg": "*rg*", "nascimento": "*nascimento*"}
* Consultar Fornecedores:
  * Método HTTP: GET
  * Chamada: localhost:3001/fornecedores
* Alterar Fornecedor:
  * Método HTTP: PUT
  * Parmâmetro: Id do fornecedor
  * Chamada: localhost:3001/fornecedores/*id_fornecedor*
  * Content JSON: {"nome": "*nome*", "email": "*email*", "cpf_cnpj": "*cpf ou cnpj*", "rg": "*rg*", "nascimento": "*nascimento*"}
* Deletar Fornecedor:
  * Método HTTP: DELETE
  * Parmâmetro: Id do fornecedor
  * Chamada: localhost:3001/fornecedores/*id_fornecedor*
