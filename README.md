# Estórias
## Tempo: ?
## Descrição
Criação do backlog Trello

# Configurações iniciais
## Tempo: 11min
## Descrição
Configuramos tecnologias para **padronização de código**.
## Tecnologias e serviços
- Pasta .vscode
- Instalar a extensão EditorConfig (carrinha do rato), clicar com o botão direito e mandar gerar o arquivo .editorconfig
- `npm i -D standard` (pode ser que tenha que reiniciar o VSCode) e instalar a extensão

# Banco de dados
## Tempo: 34min
## Descrição
**Criação** das tabelas de usuários e animais.
## Tecnologias e serviços
- Beekeeper
- PostgresSQL

# Criar uma API funcional
## Tempo: ~ 38min
## Descrição
Levantamos uma API simples com um endpoint retornando um "olá, mundo".
## Tecnologias e serviços
- `npm i express cors dotenv`
- `npm i -D nodemon`


# Cadastro do usuário
## Tempo: 1h06
## Descrição
**Cadastramos** usuários e usamos `joi` para **validar** e o `nodemailer` para **enviar e-mail**. Como usamos html dinâmico (que precisa receberer parâmetros), usamos o `handlebars` para compilar. O `bcrypt`foi usado para criptografar a senha.
## Tecnologias e serviços
- `npm i knex` e configuração do knex
- `npm i joi`: usa-se o método `object` do `joi` para gerar nossos esquemas (modelos) e o `validateSync` para validar o corpo da requisição
- `npm i nodemailer`: configuração do `nodemailer` colocando as credenciais do `SendGrid`. Usa-se o método `sendMail` para enviar o e-mail. No campo html coloca-se a string gerada pelo `handlebars`
- `npm i handlebars`: módulo `fs` para ler o html e `compile` para gerar o compilador com o retorno do fs e o método `compilador` para passar os valores
- `npm i bcrypt`: usar o método `hash` para criptografar a senha


# Login
## Tempo: 3:02
## Descrição
Fizemos o **login** do usuário conferindo se a senha batia com o `bcrypt` e gerando um token com o `jsonwebtoken`. O token é retornado na resposta.
## Tecnologias e serviços
- Usar o `joi` para validar os campos
- Usar o método `compare` dp `bcrypt` para comparar se as senhas batem
- Usar o método `sign` do `jsonwebtoken` para gerar o token


# Autenticação:
## Tempo: 3:24
## Descrição
Fizemos o intermediário de autenticação do usuário.
## Tecnologias e serviços
- Usar o método `verify` do `jsonwebtoken` para extrair o *id*
- Usar o `knex` para saber se o usuário existe

# Cadastrar animais:
## Tempo: 1min segunda gravação
## Descrição
## Tecnologias e serviços

# Recapitulando
## Tempo: 53 min segunda gravação
## Descrição
## Tecnologias e serviços

