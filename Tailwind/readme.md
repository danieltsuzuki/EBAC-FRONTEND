npx @tailwindcss/cli -i ./src/css/input.css -o ./src/css/output.css --watch


# Objetivo
Desenvolver uma página inicial para uma loja fictícia chamada Pet&Style, especializada em produtos para pets com estilo. O objetivo é aplicar os conhecimentos adquiridos sobre Tailwind CSS, criando um site responsivo e visualmente agradável utilizando classes utilitárias, estratégias de mobile-first e componentes reutilizáveis.

## Requisitos:
###  Estrutura HTML:
- Criar um arquivo index.html estruturado com as seguintes seções: 

- Header com logotipo (fictício) e um menu de navegação.

- Seção Hero com uma chamada principal e imagem destacando a loja.

- Seção Produtos com pelo menos 4 cards de produtos (ex: caminhas, brinquedos, acessórios).

- Seção Depoimentos com uma breve frase de 2 ou 3 clientes fictícios.

- Seção Contato com informações básicas (e-mail, telefone) e um pequeno formulário.

### Estilização com Tailwind:
- Utilizar Tailwind CSS via CDN ou CLI.

- Aplicar classes de utilidade para cores, espaçamento, tipografia, bordas e alinhamento.

- Criar um layout responsivo com uso de breakpoints (sm:, md:, lg:) para garantir boa exibição em diferentes tamanhos de tela.

- Usar estratégia mobile-first.

### Layout:
- Utilizar: 

- - Flexbox para organizar elementos como o menu e seções em linha.

- - Grid para a exibição dos cards de produtos.

- Aplicar classes como gap, justify-center, items-center, grid-cols-1, md:grid-cols-2, etc.

### Conteúdo:
- Criar conteúdos fictícios (título, descrição e preço) para os produtos.

- Criar comentários fictícios de 2 a 3 clientes na seção de depoimentos.

- Inserir uma imagem representando o produto ou pet, que pode ser obtida de sites como https://unsplash.com/ ou https://www.pexels.com/.

