# Teste para vaga de desenvolvedor Front-end na Youzoom
Este teste foi desenvolvido para testar de forma bastante simples os seus conhecimentos em Git, HTML, CSS com pré-compiladores (SASS), JavaScript e Linha de Comando e sua criatividade no desenvolvimento de soluções de interface de usuário.

## O que vem com este projeto?
 1. Servidor de desenvolvimento e live reload utilizando [BrowserSync](https://www.browsersync.io/) 
 2. Compilador SASS utilizando o [node-sass](https://github.com/sass/node-sass).

## Como fazer este teste?
1. Garanta que você possui o [Node.js](Node.js) e o NPM instalados e atualizados em seu sistema. Versões e documentação de instalação para Windows, macOS e Linux estão disponíveis.
2. Faça um fork deste projeto e utilizando o [Git](https://git-scm.com/) ou qualquer cliente de sua preferência faça um clone.
3. Crie uma branch com o seu nome.
4. Instale as dependências executando `npm install` da pasta raiz do projeto.
5. Inicie as tarefas de desenvolvimento executando `npm start`.
6. Se tudo ocorreu bem uma janela do seu browser principal se abrirá.
7. Use seu editor de preferência para editar e criar novos arquivos conforme a necessidade.
8. Ao final da tarefa submeta as alterações como um **Pull Request** para o projeto original.

## Qual a minha tarefa principal?
Utilizando a estrutura de arquivos fornecida e editando a `app/index.html`, crie um exemplo de uma **página simples para entrada de dados de um cartão de crédito**. Esta página deve conter obrigatoriamente:
 1. Seleção da bandeira do cartão (Utilize como exemplo Visa, Mastercard, Amex, Diners e Elo).
 2. Campos para Número do Cartão, Nome do Titular, Validade do Cartão e Código de Segurança.
 3. Campo de Feedback para informar erros de digitação ou campo em branco.
 4. Botão para concluir o pagamento.
 5. Estado de carregamento (loader) para o processamento da operação.

## Como eu devo fazer a tarefa?
 1. Teste sua página em vários browsers, garanta compatibilidade IE9+.
 2. Não utilize nenhum Framework CSS (Bootstrap, Foundation...). Queremos ver o seu código. :)
 3. Evite utilizar imagens, e se necessário utiliza-las garanta que elas estão otimizadas e em pastas separadas.
 4. Se necessário você pode adicionar outras dependências (Jquery, Font-Awesome...) ao projeto. Se o fizer, não suba o código dessas dependências, utilize uma CDN ou a adicione ao `package.json` utilizando a instalação do npm (recomendável).

## O que será avaliado?
 1. Criatividade, facilidade de utilização e boas práticas de arquitetura de informação na solução apresentada.
 2. Qualidade do código apresentado.
 3. Clareza dos comentários no código e no Pull Request.

## Posso ganhar "mais pontos"?
Pode. As tarefas a seguir **não obrigatórias**, mas com certeza farão você se destacar:
 1. Criar sua página responsível, utilizando breakpoints para celulares e tablets.
 2. Utilizar alguma metodologia de organização de CSS. Recomendamos o [BEM](http://getbem.com/introduction/).
 3. Escrever JS para simular os processos de validação e processamento de pagamento.
 4. Utilizar sintaxe atual (ES6) na escrita do seu JavaScript. Lembre-se de garantir a compatibilidade implementando um transpiler no projeto. Recomendamos o [Babel.](https://babeljs.io/)
 5. Nos surpreender apresentando uma solução "fora da caixa".

## Tenho uma dúvida em como usar a [nome da dependência], e agora?
No dia-a-dia do trabalho é muito comum o surgimento de dúvidas. Saber como procurar soluções para estas dúvidas é uma habilidade desejada. Todo este material possui links de referência para as páginas dos desenvolvedores, faça bom uso das documentações que eles fornecem. Tomamos cuidado de incluir o mínimo possível de ferramentas externas e que são utilizadas em vários projetos front-end atualmente. Tire um tempo para conhecê-las. ;)

## Vou receber um feedback?
Sim. Todos os Pull Requests serão avaliados e respondidos em até 3 dias úteis. Não se preocupe, mesmo que você não seja selecionado tomaremos cuidado de fornecer dicas que o ajudarão no seu crescimento profissional.
