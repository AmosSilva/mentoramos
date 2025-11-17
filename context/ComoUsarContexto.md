# Engenharia de Contexto Avançada para o Projeto Lucre+

A engenharia de contexto é a disciplina de construir e manter um ambiente de informações rico e dinâmico. O objetivo é garantir que a IA (Gemini) tenha todo o contexto necessário — instruções, documentação, decisões e ferramentas — no formato correto e no momento certo para executar tarefas complexas com precisão e eficiência.

Este documento evolui nossas práticas, transformando nossa documentação em um sistema de contexto ativo.

## 1. A Fonte da Verdade: `Project.md`

O arquivo [`Project.md`](./Project.md) continua sendo a fonte primária de informações sobre o projeto. Para otimizar seu uso, ele deve ser estruturado com metadados claros e seções bem definidas.

**Prática Recomendada: Usar YAML Frontmatter**

Adicione um bloco YAML no topo do arquivo para dados estruturados. Isso me permite extrair informações chave de forma rápida e precisa.

**Exemplo de `Project.md`:**

```yaml
---
projectName: Lucre+
owner: Estúdio Oz
primaryTech: [Astro, TypeScript]
repoURL: https://github.com/user/lucre-plus
deployment: Vercel
---

# Projeto Lucre+

## 1. Visão e Missão

O Lucre+ é uma plataforma de pagamentos premium...
```

**Conteúdo Principal:**

*   **Visão e Missão:** O propósito fundamental.
*   **Objetivos Principais:** O que o projeto pretende alcançar.
*   **Público-Alvo:** Quem são os usuários.
*   **Estrutura do Projeto:** Descrição da organização dos arquivos.

## 2. Registrando Decisões: `ADR.md` (Architecture Decision Records)

Para capturar o *porquê* por trás das escolhas técnicas, introduzimos o arquivo [`ADR.md`](./ADR.md). Ele servirá como um registro imutável das decisões de arquitetura importantes.

**Como usar:**

*   Crie uma nova entrada para cada decisão arquitetural significativa.
*   Foque na justificativa, nas alternativas consideradas e nas consequências da decisão.

**Exemplo de Entrada no `ADR.md`:**

```markdown
---
## ADR-001: Adoção do Astro como Framework Principal

**Data:** 12/07/2025

**Status:** Aceito

**Contexto:**
A necessidade de um site performático, com excelente SEO e baixo custo de manutenção para o projeto Lucre+. A interatividade é necessária apenas em pontos específicos (ilhas).

**Decisão:**
Adotar o Astro como framework principal. Ele gera HTML estático por padrão, garantindo alta performance, e utiliza a arquitetura de "ilhas" para carregar JavaScript apenas quando necessário.

**Consequências:**
*   **Positivas:** Carregamento rápido, melhora no ranking de SEO, experiência de desenvolvimento simplificada para conteúdo estático.
*   **Negativas:** Requer uma curva de aprendizado para desenvolvedores não familiarizados com a arquitetura de ilhas.
---
```

## 3. O Fluxo de Trabalho Diário: `RegistroDeTarefas.md`

O arquivo [`RegistroDeTarefas.md`](./RegistroDeTarefas.md) continua sendo nosso log operacional para o dia a dia.

*   **Tarefas Pendentes:** O que precisa ser feito.
*   **Tarefas Concluídas:** Um histórico do que foi realizado.
*   **Observações e Insights:** Descobertas e desafios encontrados.

Este arquivo é focado no *o quê* e no *como* do trabalho diário, enquanto o `Project.md` e o `ADR.md` focam no *porquê* e na visão geral.

## 4. O Papel do `GEMINI.md`

O arquivo `GEMINI.md` é gerado e mantido por mim (Gemini). Ele é um resumo consolidado de todo o contexto que extraio dos outros arquivos. Você não precisa editá-lo diretamente. Ao manter o `Project.md`, `ADR.md` e `RegistroDeTarefas.md` atualizados, você me fornece o material necessário para manter meu próprio entendimento do projeto sempre preciso.

**Dados que eu uso para criar o `GEMINI.md`:**

*   **Do `Project.md`:**
    *   Metadados do frontmatter (tecnologias, dono, etc.).
    *   Objetivo do projeto.
    *   Estrutura de pastas.
    *   Componentes chave.
    *   Comandos de build/desenvolvimento.
*   **Do `ADR.md`:**
    *   Resumo das decisões de arquitetura mais recentes e relevantes.
*   **Do `RegistroDeTarefas.md`:**
    *   Visão geral das tarefas recentes para entender o foco atual do desenvolvimento.
*   **Do código-fonte (`/src`):**
    *   Análise de dependências, configurações e padrões de código.

Ao seguir estas diretrizes, você me capacita a ser um assistente mais eficaz, proativo e alinhado com os objetivos do projeto Lucre+.
