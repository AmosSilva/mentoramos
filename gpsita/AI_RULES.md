# AI Studio Project Rules

Este documento descreve a pilha técnica e as diretrizes arquitetônicas para manter e estender esta aplicação.

## Visão Geral da Pilha de Tecnologia

*   **Framework:** React (v19+) com TypeScript.
*   **Build Tool:** Vite.
*   **Estilização:** Tailwind CSS para um desenvolvimento rápido e responsivo.
*   **Ícones:** Font Awesome (via CDN) acessado através de componentes wrapper em `src/components/icons.tsx`.
*   **Componentes UI:** Componentes customizados construídos com Tailwind CSS.
*   **Biblioteca de Componentes:** shadcn/ui está disponível e deve ser priorizada para novos elementos de UI padrão (ex: Button, Card, Dialog).
*   **Arquitetura:** Aplicação de Página Única (SPA), utilizando links de âncora para navegação.
*   **Responsividade:** Todos os designs devem ser totalmente responsivos e mobile-first.

## Regras de Uso de Bibliotecas

| Categoria | Biblioteca Primária | Diretrizes de Uso |
| :--- | :--- | :--- |
| **Estilização** | Tailwind CSS | Use classes utilitárias exclusivamente para toda estilização, layout e responsividade. |
| **Componentes UI** | shadcn/ui | **Priorize** o uso ou adaptação de componentes shadcn/ui para elementos padrão. Se um componente for altamente específico ou já existir como um componente customizado, mantenha a implementação customizada existente. |
| **Ícones** | Font Awesome / `src/components/icons.tsx` | Use os componentes de ícone existentes definidos em `src/components/icons.tsx`. Se um ícone necessário estiver faltando, adicione-o a este arquivo usando as classes do Font Awesome disponíveis via CDN. |
| **Gerenciamento de Estado** | React Hooks (useState, useContext) | Mantenha o gerenciamento de estado simples usando hooks nativos do React. Evite bibliotecas de estado externas, a menos que a complexidade exija. |
| **Roteamento** | N/A (SPA) | Esta é uma landing page que utiliza links de âncora. Não introduza uma biblioteca de roteamento, a menos que o escopo da aplicação mude significativamente. |