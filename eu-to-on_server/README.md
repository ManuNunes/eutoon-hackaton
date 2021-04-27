# API - EU To ON

A api cria os vendedores e os autentica, cadastra os produtos, traz filtros para produtos e por localidade.

## Setup

para usar a API em seu ambiente de desenvolvimento, basta executar o seguinte comando

```bash
adonis serve --dev
```

### Lembre-se de configurar corretamente o arquivo .env com os dados do seu banco de dados

caso queira consumir a API externamente, pode conseguir através do heroku

https://eu-to-on.herokuapp.com/

### Rotas

## GET

- /users
- /products/:id
- /products/

## POST

- /session
- /products
- /users
