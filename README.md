# IMPATT PWA

O aplicativo IMPATT PWA é um aplicativo feito como experimento para o trabalho de término de curso do grupo STADIA 2023 da Faculdade Impacta Tecnologia, com objetivo de expor as vantagens e desvantagens da aplicação do Progress Web App ou Aplicativos Web Progressivos. Como alvo  da aplicação do PWA usamos o Portal do aluno da faculdade, por atender critérios como:
Ser uma aplicação web tradicional, pela familiaridade comum entre o grupo, pode aplicar uma pesquisa mais direcionada. os principais módulos para que foram clonados: Notas e Faltas, Quadro de horário, vagas de estágio e tela principal. A escolha de tais  módulos foi guiada por uma pesquisa aplicada com alunos sobre seu acesso e principais módulos de acesso

## Recursos

- Responsividade 1: Adaptacao a diferences tamanhos telas Desktop e Mobile atendendo o usuarios no seus diversos dispotivos 
- Navegabilidade 2: Navegação clara e organizada por meio de menus, botões, links oferecendo experiência contínua entre ambos os formatos de tela testados.
- Conectividade/Acesso Off-line 3: Por meio do Service Worker, pós instalado no primeiro acesso oferece ao usuario navegacao mais rapida offline.
- Recurso 3: Com a implementação do uso de notificações e possbilidade de instacao do app na tela principal, oferece maior enjamento entre o usuario e a aplicacao

## Instalação

### Para desenvolvimento

1. Instale as dependências:
   
   ```bash
   npm install
   ```

2. Execute em desenvolvimento:

   ```bash
   npm start
   ```
### Para versão de produção ( o Service Worker só é completamente ativado neste comando)
1. Instale as dependências:
   
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   npm run build
   ```

   ```bash
   serve -s build
   ```
## Como usar

1. Abra o aplicativo em um navegador.
2. Autorize receber notificações
3. Ao receber a mensagem para instalação, autorize a instalação ( navegador Safari é necessário selecionar `adicionar à tela inicial` diretamente nas opções do navegador manualmente).
4. Navegue no aplicativo.
5. Teste sem conectividade com a internet.
6. Aguarda a notificação fora do aplicativo.



## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React
- Service Workers
- LocalStorage
- Firebase


## Autor

Gabriel dos Santos Motroni,
Priscila da Dalt,
Matheus Silva Marques
## Recursos adicionais

### Link para acesso versão produção
atualmenteo aplicativo está disponivel em produção acessivel atraves de:
[Link para acesso clique aqui](https://impatt-git-main-prisciladd.vercel.app/)

### Arquitetura:

A arquitetura utilizada no React foi componentes.

- src: O diretório principal que contém todo o código-fonte do aplicativo React.
- components: Contém os componentes reutilizáveis do aplicativo.
- styles: Contém os arquivos de estilo CSS ou pré-processados.
- utils: Contém utilitários e funções auxiliares do aplicativo.
- public: O diretório que contém arquivos estáticos, como o arquivo HTML base do aplicativo.
- .env: quando projeto inicialmente localmente, usado para configurar variveis de ambiente refente os token/chaves necessario para conexão com Firebase qua
- index.js: O ponto de entrada do aplicativo React, responsável por renderizar o componente raiz no elemento HTML do DOM.
- App.js: O componente raiz do aplicativo, que contém a estrutura geral do aplicativo e define as rotas ou a lógica principal.
- package.json: O arquivo de configuração do projeto que contém as dependências, scripts de execução e outras informações relevantes.





