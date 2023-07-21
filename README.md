# Primeira Aplicação ToDo (fora do trabalho) feita para Portfolio pessoal:
 Repositório para **primeiro Desafio do Ignite.** Uma aplicação simples e estática de tarefas para colocar em prática o que estudei durante as aulas do módulo 01 do Ignite, da Rocketseat.

# Sobre a aplicação:

- Essa aplicação aceita através de um **componente de formulário** o cadastro de tarefas em um **componente de lista**. Esse componente de lista faz a contagem do total de tarefas e quantas estão marcadas como concluídas. **Essas duas manipulações de dados são feitas através dos Estados do React**. É um hook chamado "useState", provavelmente o mais popular da biblioteca para manipulação de dados;

- **Cada item cadastrado na lista é um componente também,** que conta com: (1) uma checkbox para marcar quando concluída, (2) o texto da tarefa, que fica riscado quando a checkbox é marcada e (3) um ícone de lixeira que, ao clicado, exclui permanentemente a tarefa;

- Em resumo: é uma **aplicação que faz manipulação de dados estáticos** incluindo sua criação, edição e exclusão. Como são apenas dados estáticos, os itens são "resetados" quando a página é atualizada;

- Observação: cheguei a fazer versões mais sofisticadas no trabalho/treinamento, fazendo uso de API para buscar os dados armazenados num mock.api (um falso backend). Mas vou ver o que desses conhecimentos poderei aplicar e aprimorar nos próximos módulos do Ignite.

# Instruções para rodar:

- **ATENÇÃO!** Caso queira acessar diretamente a aplicação, sem baixar/olhar o projeto e seus códigos, ela está implementada neste link da Vercel: https://react-ignite-desafio01.vercel.app/ ;

- Caso contrário: ao Baixar/Abrir o projeto, **é recomendável fazê-lo no VSCode**, já que essa IDE foi utilizada para o desenvolvimento do desafio;

- **É preciso ter instalado na sua máquina uma versão LTS do Node** ( https://nodejs.org/pt-br/ ), para poder executar os comandos **npm (node package manager)**. Através dos passos abaixo:

  - Para instalar as dependências necessárias para rodar a aplicação, é preciso:
    
    - Clicar com o botão direito no diretório do projeto "...\react-ignite-desafio01" e clique em "abrir terminal integrado".
    
    - No terminal, execute o comando **"npm install" ou a abreviação "npm i"**. Isso é necessário porque a pasta de node_modules com as dependências necessárias para a aplicação não costumam ir para os repositórios devido ao seu peso no commit;

    - Ao ter a pasta node_modules adicionada ao projeto,  e executar o **comando "npm run dev" no mesmo terminal**. Você poderá agora abrir a aplicação no endereço https://localhost:3005;


