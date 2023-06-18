# IMPATT PWA

O aplicativo IMPATT PWA é um experimento desenvolvido pelo grupo STADIA 2023 da Faculdade Impacta Tecnologia como trabalho de conclusão de curso. Seu objetivo é demonstrar as vantagens e desvantagens dos Progressive Web Apps (PWAs). O PWA escolhido para o experimento é o Portal do Aluno da faculdade, devido à sua natureza como aplicação web tradicional e à familiaridade do grupo. Os principais módulos clonados foram: Notas e Faltas, Quadro de Horários, Vagas de Estágio e Tela Principal. A escolha desses módulos foi baseada em uma pesquisa aplicada aos alunos sobre seus principais acessos e módulos de interesse.

## Recursos

- Responsividade: Adaptação a diferentes tamanhos de tela em dispositivos desktop e mobile, atendendo aos usuários em suas diversas plataformas.
- Navegabilidade: Navegação clara e organizada por meio de menus, botões e links, oferecendo uma experiência consistente em ambos os formatos de tela testados.
- Conectividade/Acesso Offline: Por meio do Service Worker, é oferecida aos usuários uma navegação mais rápida offline após a primeira instalação.
- Recurso de Notificações: Com a implementação do uso de notificações e a possibilidade de instalação do aplicativo na tela principal, é promovido um maior engajamento entre o usuário e a aplicação.

## Instalação

### Para desenvolvimento

1. Instale as dependências:
   
   ```bash
   npm install
   ```

2. Execute em modo de desenvolvimento:

   ```bash
   npm start
   ```

### Para versão de produção (o Service Worker é ativado completamente neste comando)

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
2. Autorize o recebimento de notificações.
3. Ao receber a mensagem para instalação, autorize a instalação (no navegador Safari, é necessário selecionar "Adicionar à Tela Inicial" nas opções do navegador manualmente).
4. Navegue pelo aplicativo.
5. Teste o aplicativo sem conectividade com a internet.
6. Aguarde notificações mesmo fora do aplicativo.

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

### Link para acessar a versão de produção

Atualmente, o aplicativo está disponível em produção e pode ser acessado através do seguinte link:
[Link para acesso - clique aqui](https://impatt-git-main-prisciladd.vercel.app/)

### Arquitetura:

A arquitetura utilizada no React foi baseada em componentes.

- src: Diretório principal que contém todo o código-fonte do aplicativo React.
- components: Contém os componentes reutilizáveis do aplicativo.
- styles: Contém os arquivos de estilo CSS ou pré-processados.
