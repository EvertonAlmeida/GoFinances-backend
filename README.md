<h1>
<img src="https://github.com/EvertonAlmeida/GoFinances-backend/blob/master/src/assets/logoGit.png">
<h1>

<h1>
<img src="https://github.com/EvertonAlmeida/GoFinances-backend/blob/master/src/assets/gofinances.gif">
<h1>

# Go Finances

O projeto **Go Finances** foi criado dentro do **Bootcamp Gostack** e tem como objetivo gerenciar entradas e saídas financeiras por categoria possibilitando a importação por CSV.

---
## ✋🏻 Pré-requisitos

* Node.js
* Yarn
---

## Back-end

Neste repositório você pode baixar o **Back-end** do projeto. Se Você quiser ter acesso ao **Front-End** basta clicar [aqui](https://github.com/EvertonAlmeida/GoFinances-frontend).

---

### 🚀 Tecnologias

* [NodeJS](https://nodejs.org/) - Node.js® é um runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine.
* [Typescript](https://www.typescriptlang.org/) - é uma ferramenta que adiciona tipagem ao JavaScript.
* [TypeORM](https://typeorm.io/#/) - ORM que faz o mapeamento de dados relacionais.
* [Multer](https://github.com/expressjs/multer) - O Multer é um middleware node.js para lidar com uploads de arquivos.


---
## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd GoFinances-backend`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias do banco de dados dentro do arquivo `ormconfig.json` que está na raiz do projeto;
5. crie o banco de dados `gostack_desafio06`;
6. Rode `yarn typeorm migration:run` para executar as migrations;
7. Rode `yarn dev:server` para iniciar o servidor.

---

## Rodando os testes


<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente ⚠️
</h4>

- **`should be able to create a new transaction`**: Este teste tem como objtivo permitir que uma transação seja criada, e retorne um json com a transação criado.

* **`should create tags when inserting new transactions`**: Teste de criação de uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o `id` que acabou de ser criado.

- **`should not create tags when they already exists`**: transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o `id` dessa categoria existente, não permitindo a criação de categorias com o mesmo `title`.

* **`should be able to list the transactions`**: o proposito deste teste é permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa (total de income).

* **`should be able to delete a transaction`**: A rota de delete deve excluir uma transação, e ao fazer a exclusão, deve retorne uma resposta vazia, com status 204.

- **`should be able to import transactions`**: Para que esse teste passe, aaplicação deve permitir que seja importado um arquivo csv, contendo o seguinte [modelo](./assets/file.csv).

---

## Autor

Desenvolvido por **Everton Almeida**

---

## License

Este projeto está licenciado sob a licença MIT - consulte o [LICENSE.md](LICENSE.md) arquivo para detalhes
