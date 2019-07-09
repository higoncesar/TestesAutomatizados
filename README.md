# Estudos de Teste Automatizado

Este é um repositorio que contém o resultado de meus estudos sobre testes automatizados com JavaScript utilizando NodeJS, Sequelize que é um ORM para Node, junto com Jest que é um Framework de testes. Neste projeto fiz toda parte de testes relacionados a autenticação.
O Legal do Jest é que você consegue ter um relatório visual como pode ser visto abaixo, tendo informações da cobertura dos testes dentro de sua aplicação, informando a porcetangem que foi testado e quais partes do projeto estão sem testes.

![Jest Report](/assets/jest-report.png)

Você tem acesso a este relatório, abrindo o index.html que se encontra dentro de: `__tests__/coverage/lcov-report`

## TECNOLOGIAS / LIBS UTILIZADAS

NodeJS, Jest, Nodemon, Faker, Express, Sequelize, Json Web Token, Sqlite, EditorConfig dentre outras.

## INSTALAÇÃO

Para testar este projeto é necessario ter instalado o NodeJS, caso não tenha você pode baixar o instalador através no link abaixo:
https://nodejs.org/en/download/

Após o instalar o NodeJS, é só clonar o repositorio com o comando:

```
\$ git clone https://github.com/higoncesar/TestesAutomatizados
```

Entrar dentro da Pasta do Projeto:

```
\$ cd TestesAutomatizados
```

Instalar as dependencias com o comando:

```
\$ npm install
```

Após instalar as dependências, basta rodar o comando a baixo, para executar os testes unitários e de integração que estão no diretorio `__tests__`:

```
\$ npm install ou \$ npm install
```

> "Honestidade em pequenas coisas, não é algo pequeno"
> Clean Code - Robert C. Martin
