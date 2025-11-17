# ADR - Architecture Decision Records

Este arquivo registra as decisões de arquitetura mais importantes tomadas durante o desenvolvimento do projeto Lucre+. Cada entrada descreve o contexto, a decisão e suas consequências.

---

## ADR-001: Adoção do Astro como Framework Principal

**Data:** 12/07/2025

**Status:** Aceito

**Contexto:**
A necessidade de um site performático, com excelente SEO e baixo custo de manutenção para o projeto Lucre+. A interatividade é necessária apenas em pontos específicos (ilhas), como no menu de navegação e em futuros formulários.

**Decisão:**
Adotar o Astro como framework principal. Sua arquitetura gera HTML estático por padrão, o que garante alta performance e ótima indexação por motores de busca. Para interatividade, o Astro utiliza a arquitetura de "ilhas", carregando JavaScript apenas nos componentes que necessitam, sem impactar o restante do site.

**Consequências:**

- **Positivas:**
  - **Performance:** Tempos de carregamento extremamente rápidos (Core Web Vitals).
  - **SEO:** A renderização no servidor (SSR) e o HTML estático são ideais para SEO.
  - **Custo:** Menor custo de hospedagem e CDN devido aos arquivos estáticos.
  - **Experiência do Desenvolvedor:** Permite o uso de múltiplos frameworks (React, Vue, Svelte) para as ilhas de interatividade, se necessário.

- **Negativas:**
  - **Curva de Aprendizado:** A equipe pode precisar de tempo para se familiarizar com a arquitetura de ilhas e o conceito de "hidratação parcial".
  - **Ecossistema:** Embora crescente, o ecossistema do Astro pode não ser tão vasto quanto o de frameworks mais estabelecidos como Next.js ou Nuxt.js.

---

---

## ADR-002: Design Responsivo com `cqw` e `max()`

**Data:** 12/07/2025

**Status:** Aceito

**Contexto:**
Necessidade de um design altamente flexível e responsivo que se adapte a diversas resoluções e dispositivos, garantindo uma experiência de usuário consistente.

**Decisão:**
Adoção de unidades de viewport de contêiner (`cqw`) em conjunto com a função `max()` no CSS global (`global.css`). Isso permite que os elementos se ajustem de forma mais granular ao tamanho de seus contêineres pais, em vez de dependerem apenas do viewport geral.

**Consequências:**

- **Positivas:** Layout mais fluido e adaptável; menos necessidade de media queries complexos.
- **Negativas:** `cqw` é uma tecnologia relativamente nova e pode não ser suportada por navegadores muito antigos.

---

---

## ADR-003: Estrutura de Componentes Modulares

**Data:** 12/07/2025

**Status:** Aceito

**Contexto:**
O projeto precisa ser de fácil manutenção, reutilização de código e colaboração entre desenvolvedores.

**Decisão:**
A interface foi dividida em componentes reutilizáveis (ex: `HeroSection`, `Header`, `Footer`). Cada componente é responsável por uma parte específica da UI, tornando o código mais organizado e compreensível.

**Consequências:**
- **Positivas:** Código mais limpo, manutenível e reutilizável; desenvolvimento mais rápido a longo prazo.
- **Negativas:** Pode haver um pequeno overhead inicial na criação de componentes muito granulares.

---
