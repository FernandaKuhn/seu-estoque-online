# Seu Estoque Online

Aplicação simples para gerenciamento de estoque de produtos.

Permite cadastrar, alterar, excluir produtos e gerenciar estoque com dados de criação e atualização armazenados. A aplicação expõe uma API REST documentada com **Swagger**.

---

## Tecnologias Utilizadas

### Backend
- Java
- Spring Boot
- JPA (Java Persistence API)
- Banco de dados in-memory H2
- Swagger para documentação da API REST

### Frontend
- React
- Vite
- TypeScript
- Axios para comunicação com API
- Material UI para estilização e componentes visuais

---

## Funcionalidades

- Cadastro de produtos com nome, preço, quantidade, imagem, data de criação e atualização.
- Alteração do preço do produto, com validação para que o preço não seja menor que R$ 9,90.
- Alteração da quantidade do produto em estoque.
- Exclusão de produtos.
- API REST completa para gerenciamento do estoque.
- Documentação da API via Swagger.

---

## Como Rodar o Projeto

### Backend

1. Clone o repositório
2. Acesse a pasta `back-end`
3. Execute o comando para rodar a aplicação Spring Boot:
   ```bash
   ./mvnw spring-boot:run
A API estará disponível em http://localhost:8080

A documentação Swagger estará disponível em http://localhost:8080/swagger-ui.html

### Frontend

Acesse a pasta `front-end`

Instale as dependências:
npm install

Execute o projeto:
npm run dev

---

### Projeto Rodando
![image](https://github.com/user-attachments/assets/d805a548-aa80-4876-8af4-eed9bfecf986)

Crédito ícone das caixas:  Smashicons Flaticon

