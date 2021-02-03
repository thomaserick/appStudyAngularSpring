# Aplicativo para Estudos de Angular e Spring Boot

## Projeto Agenda de Contatos

### Tecnologias Utilizadas

- Angular10
  - Material
  - ReactForms
- Spring Boot

### Instalação

- chocolate
  - choco -v
- NodeJs
  - choco install nodejs-lts

### Dependencias FrontEnd(Angular10)

- Instalação do angular global
  - npm install -g @angular/cli
- Angular Material
  - ng add @angular/material

**Comandos**

- ng new (Nome do projeto) - Cria o projeto
- ng serve --open
  - Start a aplicacao
- ng generate component (ng g c (nome))
  - Cria os componentes
- ng generate model (ng g c (nome))
  - Cria os modulos

### Utils

-Json Server uma lib capaz de criar uma api fake funciona no http://localhost/3000

    - npm install -g json-server

- iniciar o servidor

  - json-server nomeArquivo.json -p 3003 -w

- Ajustes nas classes Angular10
  - Alterar o tsconfig adicionando a config " "strictPropertyInitialization": false,"
  - Adicionando opcional(?) nos atributos

**Helpers**

- [Angular_Style_Guide](https://github.com/johnpapa/angular-styleguide)
- [Format GitHub](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
