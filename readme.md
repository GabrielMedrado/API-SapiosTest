# Projeto em TypeScript

Este projeto foi desenvolvido utilizando TypeScript, uma linguagem que traz tipagem estática para JavaScript, proporcionando maior segurança e facilidade na manutenção do código.

## Princípios SOLID

Os princípios SOLID foram aplicados na construção da estrutura de pastas, onde cada uma é responsável por uma parte específica do sistema. Essa abordagem visa facilitar a manutenção do código, promover a reutilização de componentes e garantir a escalabilidade do projeto conforme ele cresce.

## Pré-requisitos

- Node.js instalado
- Docker instalado

## Instalação do projeto

- (lembre-se de criar o arquivo ".env" com as variáveis de ambiente do arquivo ".env.example")
- npm i
- docker build -t sapios-test-backend .
- docker run -dp 127.0.0.1:3000:3000 sapios-test-backend

## Documentação / teste da API

Após realizar a criação do container da API e inicializá-lo, acesse a URL: **http://localhost:3000/api-docs**

<img src="https://i.ibb.co/vvRVnj8/swagger-img.png" alt="Swagger img" width="600">

## Bibliotecas Utilizadas

- **Express**: Framework web rápido, flexível e minimalista para Node.js.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para process.env.
- **Prisma**: ORM (Object-Relational Mapping) moderno para Node.js e TypeScript.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de dados.
- **Swagger**: Ferramenta para design, criação e documentação de APIs RESTful.
- **Tsyringe**: Container de inversão de controle e injeção de dependência para TypeScript.
- **tsup**: Empacotador TypeScript minimalista e rápido.
- **Eslint & Prettier**: Ferramentas para garantir a consistência e a qualidade do código, identificando e corrigindo problemas de formatação e estilo.

Estas bibliotecas foram selecionadas para otimizar o desenvolvimento, aumentar a produtividade e garantir a qualidade do código.
