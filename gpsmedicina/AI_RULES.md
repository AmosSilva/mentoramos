# Regras de Desenvolvimento AI Studio para GPS Medicina Landing Page

Este documento descreve a pilha técnica e as diretrizes de desenvolvimento para manter e estender o aplicativo GPS Medicina Landing Page.

## Visão Geral da Pilha Técnica (Tech Stack)

*   **Framework:** React (v19.2.0)
*   **Linguagem:** TypeScript (obrigatório para todos os novos arquivos).
*   **Ferramenta de Build:** Vite.
*   **Estilização:** Tailwind CSS (obrigatório para todos os estilos e design responsivo).
*   **Ícones:** Font Awesome (via CDN, acessado através de `components/icons.tsx`) e Lucide React (disponível para novos ícones).
*   **Componentes UI:** Componentes customizados, com a biblioteca Shadcn/ui disponível para novos elementos de interface (ex: botões, formulários, modais).
*   **Arquitetura:** Aplicação de página única (SPA) com estrutura baseada em componentes.
*   **Gerenciamento de Estado:** Estado local do React (useState, useEffect).

## Regras de Uso de Bibliotecas

| Propósito | Biblioteca/Ferramenta Recomendada | Regra |
| :--- | :--- | :--- |
| **Estilização** | Tailwind CSS | **Obrigatório.** Todos os componentes devem ser estilizados usando classes utilitárias do Tailwind CSS. Garanta que os designs sejam responsivos. |
| **Ícones** | `components/icons.tsx` / Lucide React | Use os ícones existentes em `components/icons.tsx`. Para novos ícones, prefira Lucide React se um ícone adequado não estiver disponível no conjunto atual. |
| **Componentes UI** | Shadcn/ui / Radix UI | Para elementos de UI complexos (ex: botões, formulários, diálogos, dropdowns), utilize os componentes Shadcn/ui disponíveis para manter a consistência e acessibilidade. |
| **Estrutura de Componentes** | Componentes Customizados | Crie um arquivo novo e focado para cada novo componente ou hook em `src/components/` ou `src/pages/`. Mantenha os componentes pequenos (idealmente < 100 linhas). |
| **Roteamento** | N/A (Página Única) | Se o roteamento se tornar necessário, utilize o React Router. |
| **Gerenciamento de Estado** | Hooks do React (useState, useEffect) | Mantenha o gerenciamento de estado simples usando os hooks nativos do React. |