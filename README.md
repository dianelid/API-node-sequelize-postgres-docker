# API-node-sequelize-postgres-docker

Tecnologias utilizadas:
* Node
* Express
* Sequelize
* Docker
* Docker-compose
* PostgreSQL

## Execução
Execute no terminal `docker-compose up --build` na pasta raiz do projeto.

## Chamadas do Postman
### Entidade Empresa
* Cadastrar Empresa:
  * Método HTTP: POST
  * Chamada: localhost:3000/empresas
  * Content JSON: {"nomeFantasia": "*nome*", "uf": "*uf*", "cnpj": "*cnpj*"}
* Consultar Empresas:
  * Método HTTP: GET
  * Chamada: localhost:3000/empresas
* Alterar Empresa:
  * Método HTTP: PUT
  * Parmâmetro: Id da empresa
  * Chamada: localhost:3000/empresas/*id_empresa*
  * Content JSON: {"nomeFantasia": "*nome*", "uf": "*uf*", "cnpj": "*cnpj*"}
* Deletar Empresa:
  * Método HTTP: DELETE
  * Parmâmetro: Id da empresa
  * Chamada: localhost:3000/empresas/*id_empresa*
* Associar Fornecedor a Empresa:
  * Método HTTP: POST
  * Parmâmetro: Id da empresa e Id do fornecedor
  * Chamada: localhost:3000/empresas/*id_empresa*/fornecedores/*id_fornecedor*
* Desassociar Fornecedor e Empresa:
  * Método HTTP: DELETE
  * Parmâmetro: Id da empresa e Id do fornecedor
  * Chamada: localhost:3000/empresas/*id_empresa*/fornecedores/*id_fornecedor*
### Entidade Fornecedor
* Cadastrar Fornecedor:
  * Método HTTP: POST
  * Chamada: localhost:3000/fornecedores
  * Content JSON: {"nome": "*nome*", "email": "*email*", "cpf_cnpj": "*cpf ou cnpj*", "rg": "*rg*", "nascimento": "*nascimento*"}
* Consultar Fornecedores:
  * Método HTTP: GET
  * Chamada: localhost:3000/fornecedores
* Alterar Fornecedor:
  * Método HTTP: PUT
  * Parmâmetro: Id do fornecedor
  * Chamada: localhost:3000/fornecedores/*id_fornecedor*
  * Content JSON: {"nome": "*nome*", "email": "*email*", "cpf_cnpj": "*cpf ou cnpj*", "rg": "*rg*", "nascimento": "*nascimento*"}
* Deletar Fornecedor:
  * Método HTTP: DELETE
  * Parmâmetro: Id do fornecedor
  * Chamada: localhost:3000/fornecedores/*id_fornecedor*