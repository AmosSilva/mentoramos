# GEMINI - Contexto do Projeto Lucre+

Este documento fornece um contexto consolidado para o projeto Lucre+, servindo como a principal fonte de informações para o desenvolvimento e manutenção. Ele é baseado nos arquivos encontrados em `context/`.

## 1. Objetivo do Projeto

O Lucre+ é uma plataforma de pagamentos premium projetada para impulsionar mentores, produtores e empresários digitais. Seu foco é oferecer soluções de pagamento que auxiliem no crescimento e na monetização de negócios digitais.

## 2. Tecnologias e Dependências

- **Framework Principal:** Astro (`^5.12.3`)
- **Dependências Chave:** A única dependência principal listada é o próprio `astro`.
- **Variáveis de Ambiente:** Nenhuma variável de ambiente foi especificada.

## 3. Comandos Essenciais

- **Build para Produção:** `npm run build`

## 4. Estrutura do Projeto

O projeto segue uma estrutura de pastas padrão do Astro para facilitar o desenvolvimento:

- `src/`: Código-fonte principal.
  - `components/`: Componentes reutilizáveis do Astro (`.astro`).
  - `layouts/`: Estruturas de página base (`BaseLayout.astro`).
  - `pages/`: Arquivos que representam as rotas/páginas do site.
  - `styles/`: Arquivos CSS globais (`global.css`).
  - `logo/`: Arquivos SVG do logo.
- `public/`: Ativos estáticos (imagens, favicons, etc.).
- `context/`: Documentação de contexto do projeto (`Project.md`, etc.).

## 5. Visão Geral dos Componentes Chave

- **`Header.astro`**: Navegação principal, menu responsivo e logo.
- **`Footer.astro`**: Links de navegação, informações de contato, redes sociais e detalhes legais.
- **`HeroSection.astro`**: Seção principal da página inicial com título, descrição e botões de ação.

## 6. Design e Estilo

- **Fontes:**
  - **Títulos:** Montserrat (650 - bold)
  - **Textos:** Inter (500 - light, 500 - normal)
- **Estilo de CSS:** O projeto utiliza uma abordagem de design responsivo moderna com unidades de viewport de contêiner (`cqw`) e a função `max()` para garantir que fontes e espaçamentos se adaptem de forma fluida ao tamanho de seus contêineres, não apenas à janela do navegador.

## 7. Decisões de Arquitetura

Um registro de decisões de design e arquitetura é mantido em [`context/Project.md`](context/Project.md). As decisões chave incluem:

- **Uso do Astro:** Escolhido pela alta performance (HTML estático por padrão) e arquitetura de "ilhas" para interatividade.
- **Design Responsivo com `cqw` e `max()`**: Para criar um design altamente flexível e granular.
- **Estrutura Modular de Componentes:** Para promover a reutilização de código e a manutenibilidade.

## 8. Testes e Contribuição

- **Testes:** Nenhuma estratégia ou arquivos de teste foram encontrados no projeto.
- **Contribuição:** Não há um guia de contribuição (`CONTRIBUTING.md`) definido.

## 9. Registro de Tarefas

Um registro de tarefas pendentes e concluídas é mantido no arquivo [`context/RegistroDeTarefas.md`](context/RegistroDeTarefas.md). Consulte-o para acompanhar o progresso do desenvolvimento.
