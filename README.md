# Car Shop
### Autor: Matheus Eduardo de Sousa Azevedo

Este projeto foi desenvolvido por mim e faz parte do acervo de atividades executadas na escola de programação Trybe. A formação ao longo de 1 ano em Desenvolvimento Web desta instituição  conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. Tudo voltado totalmente para o mercado de trabalho com intuito de entregar um profissional adequado para a realidade atual. 

# Sobre o projeto

Este projeto é uma API desenvolvida utilizando os princípios de Programação Orientada a Objetos (POO) e o banco de dados MongoDB através do framework do Mongoose. A API é capaz de realizar operações CRUD para gerenciar carros e motocicletas de uma concessionária.

## Instalação

1.  Clone este repositório em sua máquina:

`git clone git@github.com:Matheus-Azevedo/Project-Car-Shop-Matheus-eduardo.git` 

2.  Acesse a pasta do projeto:

`cd concessionaria` 

3.  Instale as dependências:

`npm install` 

4.  Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

`MONGO_DB_URL=mongodb://localhost:27017/CarShop` 

## Uso

Para iniciar a API, execute o comando:

`npm start` 

A API estará disponível em `http://localhost:3000`.

### Rotas

A API possui as seguintes rotas:

-   `/cars`: rota para listar todos os carros ou adicionar um novo carro
-   `/cars/:id`: rota para visualizar, atualizar ou excluir um carro específico
-   `/motorcycles`: rota para listar todas as motocicletas ou adicionar uma nova motocicleta
-   `/motorcycles/:id`: rota para visualizar, atualizar ou excluir uma motocicleta específica

As rotas são acessadas através de requisições HTTP com os seguintes métodos:

-   `GET`: para obter informações
-   `POST`: para criar um novo recurso
-   `PUT`: para atualizar um recurso existente
-   `DELETE`: para excluir um recurso existente

### Testes

Para executar os testes, execute o comando:

`npm test` 

Os testes foram implementados utilizando as bibliotecas `mocha` e `chai` e testam apenas a camada service da API.

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se livre para abrir uma issue ou um pull request.
