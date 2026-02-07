🐾 **Pet Shop Ateliê Teal | Mini Loja Virtual**
Status do Projeto: 🚀 Concluído (Aula de Desenvolvimento Web Fullstack)

📖 **Descrição:**

Este projeto é uma aplicação React moderna que simula uma **loja online de produtos para pets**. O objetivo foi criar uma experiência fluida para o usuário, integrando o consumo de uma API externa com a funcionalidade de gerenciamento de inventário em tempo real.

🛠️ **Tecnologias e Ferramentas:**

React JS: Biblioteca base para a construção da interface.

PrimeReact: Componentes profissionais (Cards, Diálogos, Botões).

PrimeFlex: Sistema de grid responsivo para dispositivos móveis.

Axios: Cliente HTTP para busca de dados na Fake Store API.

Unsplash API: Utilizada para as imagens de produtos pet de alta qualidade.

🌟 **Funcionalidades Principais:**

🛒 **Vitrine Interativa**

Uma página inicial elegante onde o cliente pode explorar os produtos para pets. Cada item possui um efeito de sombra ao passar o mouse.

🔍 **Detalhes do Produto**

Ao clicar em "Ver Detalhes", um componente Dialog (modal) é disparado, exibindo a descrição técnica do produto e uma imagem ampliada sem recarregar a página.

📝 **Cadastro de Produtos**

Uma seção exclusiva para adicionar novos itens. Ao preencher o formulário, o novo produto é injetado instantaneamente no topo da loja através do gerenciamento de estado (useState).

📂 **Organização do Código:**

App.js: O controlador de navegação e estilos globais (Teal Theme).

Storefront.js: A visão principal de exposição dos produtos pet.

ProductList.js: Onde ocorre a "mágica" da API e o mapeamento dos itens.

ProductCard.js: Componente individual de exibição e lógica do modal.

ProductForm.js: Interface de cadastro de novos produtos.

🚀 **Como Iniciar:**

Clone o projeto: git clone [https://github.com/talitalima-tech/projeto.git](https://github.com/talitalima-tech/projeto.git)

Instale as dependências: npm install

Rode a aplicação: npm start

💡 **Aprendizados Adquiridos:**

Neste projeto, pude consolidar conceitos fundamentais de desenvolvimento:

Hooks: useState para dados voláteis e useEffect para requisições assíncronas.

Props: Comunicação eficiente entre componentes.

Personalização: Adaptação de uma API genérica para um nicho específico (Produtos Pet).

UX/UI: Uso de cores harmônicas e feedbacks visuais para o usuário.

Desenvolvido com ☕ e código durante as aulas de Desenvolvimento Web.
