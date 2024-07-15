- O que é o Node.js

Node.js é uma plataforma para desenvolvimento de aplicativos "server side" com a linguagem de programação JavaScript e TypeScript. Inicialmente, e por muitos anos se manteve assim, o JavaScript era uma linguagem apenas para telas e aplicações frontend, onde se utilizava a linguagem para realizar interações do usuário com a página web. Com esse mesmo pensamento, o pesquisador Ryan Dahl criou uma plataforma que interpretava a linguagem JavaScript com o mesmo motor de interpretação dos navegadores mais modernos. Essa foi uma bela sacada do pesquisador que, atualmente em 2024, essa é uma das tecnologias bases para desenvolvimento de software de todas as empresas de tecnologia.

- Como instalar o node na minha máquina?

Primeiramente, abra esse site: https://nodejs.org/pt/download/package-manager e escolha a configuração que ajuste ao seu caso de Sistema Operacional. É importante saber que, em qualquer dos casos, sempre escolha uma versão de Node.js (LST), que é uma versão com um longo tempo de suporte da empresa para o com o software. Vou dar o exemplo de instalação para uma máquina Linux (que pode ser reaproveitada com o WSL no seu sistema Windows 10/11):

. Node.js versão v20.15.1 (LTS) no Linux usando o NVM

# Instalação do nvm (Node Version Manager), um versionador de versões do Node.js
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Download e Instalação do Node.js (Pode ser necessário reiniciar o terminal)
$ nvm install 20

# Verificar a versão do Node.js instalada
$ node -v 

# Verificar a versão do NPM (gerenciador de pacotes do Node.js)
$ npm -v

- O que é o NVM e o NPM

O NVM (Node Version Manager) é um dos vários gerenciador de versões do Node.js. Caso você queria alterar a versão do Node.js por algum motivo específico, é possível instalar essa versão e alterar no seu projeto. 
O NPM (Node Package Manager) é o grande gerenciador de pacotes do Node.js. O NPM é responsável por baixar e configurar as bibliotecas, módulos e pacotes para seu aplicativo em Node.js. Basicamente, as configurações do NPM ficam no arquivo gerado pelo mesmo com o nome de package.json.


- Como iniciar meu primeiro projeto em Node.js.

. Com o Node.js instalado na sua máquina, escolha um arquivo para criar seu projeto, já na pasta, abra o terminal e faça o comando:

$ npm init -y

. Com isso, um arquivo chamado package.json é criado na raiz da sua pasta. Na raiz do projeto, criar uma pasta chamada src, e nessa pasta criar seus arquivos .js.

. No arquivo package.json, adicionar o campo "type" no json com o valor de "module" para poder adicionar módulos na sua aplicação com a sintaxe moderna. Exemplo:

"type": "module",

. E também no arquivo package.json, no campo "scripts", no valor, adicionar o campo "dev" para poder rodar sua aplicação. Exemplo:

"scripts": {
    "dev": "node --watch src/server.js"
},

. Aqui está um arquivo package.json para base de uma aplicação que inicia um arquivo em src chamado server.js, que iniciar um servidor web:

{
  "name": "01-fundamentos",
  "type": "module",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "node --watch src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

. Para rodar sua aplicação, com as configurações feitas no arquivo package.json, aplicar o comando na raiz do projeto:

$ npm run dev







