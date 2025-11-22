## Objetivo
Refatorar a aplicação desenvolvida anteriormente, aplicando as técnicas aprendidas para melhorar a organização, reutilização e legibilidade do código.

## Estrutura do Projeto
Reorganize seu código em módulos separados, criando os seguintes arquivos de sugestão:

- index.html → Interface da aplicação.

- /js/ 

  - classes.js → Definição das classes.

  - utils.js → Funções auxiliares.

  - app.js → Código principal.

- styles.css (opcional) → Estilos básicos para a aplicação.

## Refatorações Necessárias
1. Manter Programação Orientada a Objetos (POO)

2. Separar Código em Módulos (ES Modules)
    - Criar arquivos classes.js, utils.js e app.js, garantindo que cada um tenha uma responsabilidade específica.

    - Utilizar import/export para organizar as funcionalidades.

3. Aplicar Técnicas de Programação Funcional
    - Utilizar métodos como map(), find() e reduce()

    - Criar funções puras sempre que possível.

4. Melhorar Manipulação do DOM
    - Utilizar addEventListener() para capturar eventos sem usar eventos direto no HTML.

5. Validar Entradas e Melhorar Experiência do Usuário

    - Garantir que a interface seja dinâmica, atualizando os valores sem precisar recarregar a página.