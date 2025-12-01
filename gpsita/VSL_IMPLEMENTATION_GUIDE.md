# Guia de Implementação: Lógica de VSL com Bypass para Usuários Recorrentes

Este guia detalha o passo a passo para implementar uma estratégia de VSL (Video Sales Letter) em uma landing page React, incluindo uma otimização crucial: usuários que já assistiram ao vídeo não precisam vê-lo novamente em visitas futuras.

## Objetivo Final

1.  **Primeira Visita:** O usuário vê apenas um vídeo em autoplay. Após um tempo pré-definido, o restante da página (cabeçalho, seções de conteúdo, rodapé) é revelado, e a rolagem é ativada.
2.  **Visitas Recorrentes:** O usuário vê a página inteira imediatamente, com o vídeo já posicionado ao lado do texto principal, sem a necessidade de esperar.

---

### Passo 1: Criar um Arquivo de Configuração Central

Crie um arquivo para centralizar as configurações principais. Isso facilita a manutenção.

**Arquivo:** `src/data/siteConfig.ts`

```typescript
/**
 * Arquivo de Configuração Geral do Site
 */
export const siteConfig = {
  // Cole aqui o ID do seu vídeo do Vturb (ou outro player)
  vturbVideoId: '6685e85a02b1380008a3f112',

  // Defina em SEGUNDOS quando o restante da página deve aparecer
  ctaDelaySeconds: 5,
};
```

---

### Passo 2: Estruturar o Componente Principal (`App.tsx`)

O `App.tsx` orquestra a lógica principal. Ele decide, com base no `localStorage`, se deve mostrar a página inteira imediatamente ou iniciar o fluxo do VSL.

**Arquivo:** `App.tsx`

```typescript
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// ... importe os outros componentes da sua página

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showPageContent, setShowPageContent] = useState(false);

  useEffect(() => {
    // 1. Verifica se o usuário já viu o VSL
    const hasSeenVSL = localStorage.getItem('hasSeenVSL');

    if (hasSeenVSL === 'true') {
      // 2. Se sim, revela a página e ativa a rolagem imediatamente
      setShowPageContent(true);
      document.body.style.overflow = 'auto';
    } else {
      // 3. Se não, esconde a rolagem para focar no vídeo
      document.body.style.overflow = 'hidden';
    }
    
    // Simula um tempo de carregamento para evitar "flashes" de conteúdo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  // Função que será chamada pelo Hero quando o tempo do vídeo acabar
  const handleShowPageContent = useCallback(() => {
    // 4. Salva a "marcação" no navegador para visitas futuras
    localStorage.setItem('hasSeenVSL', 'true');
    setShowPageContent(true);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      {/* O Header só aparece quando o conteúdo da página é revelado */}
      <Header isLoading={!showPageContent && !loading} />
      <main>
        <Hero 
          isLoading={loading} 
          onShowPageContent={handleShowPageContent}
          isRevealed={showPageContent}
        />
        {/* O resto do conteúdo só é renderizado após o loading inicial */}
        {!loading && (
          <div className={`transition-opacity duration-1000 ${showPageContent ? 'opacity-100' : 'opacity-0'}`}>
              {/* ... Seus outros componentes aqui ... */}
          </div>
        )}
      </main>
      {!loading && (
        <div className={`transition-opacity duration-1000 ${showPageContent ? 'opacity-100' : 'opacity-0'}`}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
```

---

### Passo 3: Implementar a Lógica no Componente `Hero`

O `Hero` é o coração da experiência. Ele exibe o vídeo e controla o temporizador para novos usuários. Ele também se adapta visualmente com base no estado (revelado ou não).

**Arquivo:** `components/Hero.tsx`

```typescript
import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { ctaLink } from '../src/data/navigationData';
import { siteConfig } from '../src/data/siteConfig';
// ... importe seus ícones e outros dados

interface HeroProps {
  isLoading: boolean;
  onShowPageContent: () => void;
  isRevealed: boolean; // Recebe o estado do App.tsx
}

const Hero: React.FC<HeroProps> = ({ isLoading, onShowPageContent, isRevealed }) => {

  useEffect(() => {
    // Se a página já deve ser revelada (usuário recorrente), não faz nada.
    if (isLoading || isRevealed) {
      return;
    }

    // Inicia o temporizador APENAS para novos usuários.
    const timer = setTimeout(() => {
      onShowPageContent(); // Chama a função do App.tsx para revelar tudo
    }, siteConfig.ctaDelaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [isLoading, isRevealed, onShowPageContent]);

  if (isLoading) {
    return null; // Não renderiza nada durante o carregamento inicial
  }

  return (
    // Lógica de layout dinâmico: padding menor quando só o vídeo aparece.
    <section className={`transition-all duration-1000 ${isRevealed ? 'py-20' : 'py-12'}`}>
      <div className="container mx-auto px-6 xl:px-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:min-h-[50vh]">
          
          {/* Container do Texto: só ocupa espaço se a página estiver revelada */}
          <div className={`w-full text-left transition-all duration-1000 ease-in-out overflow-hidden ${isRevealed ? 'md:w-1/2 max-h-[1000px] md:mr-12' : 'md:w-0 max-h-0 md:mr-0'}`}>
            {/* ... conteúdo do seu hero (título, parágrafo, botão) ... */}
          </div>

          {/* Container do Vídeo: ocupa a tela toda ou metade, dependendo do estado */}
          <div className={`w-full transition-all duration-1000 ease-in-out ${isRevealed ? 'md:w-1/2' : 'md:w-full'}`}>
            <VideoPlayer videoId={siteConfig.vturbVideoId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

### Passo 4: Simplificar o `VideoPlayer`

O componente de vídeo agora tem uma única responsabilidade: exibir o vídeo. Toda a lógica de tempo foi movida para o `Hero`.

**Arquivo:** `components/VideoPlayer.tsx`

```typescript
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const embedUrl = `https://player.vturb.com/index.html?vid=${videoId}&s=1&autoplay=1&muted=1`;

  return (
    <div className="relative w-full aspect-video ...">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title="Player de Vídeo"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
```

---

### Passo 5: Adaptar o `Header`

O `Header` também precisa saber quando aparecer.

**Arquivo:** `components/Header.tsx`

```typescript
import React from 'react';
// ...

interface HeaderProps {
    isLoading: boolean; // Recebe a prop do App.tsx
}

const Header: React.FC<HeaderProps> = ({ isLoading }) => {
  // ...
  return (
    // A classe `isLoading` controla a visibilidade inicial do header
    <header className={`sticky top-0 z-50 ... transition-all duration-1000 ${isLoading ? 'max-h-0 opacity-0 py-0' : 'max-h-96 opacity-100 py-4'}`}>
      {/* ... conteúdo do header ... */}
    </header>
  );
};

export default Header;
```

Com esses componentes e essa estrutura, a lógica de VSL funcionará de forma robusta e otimizada para todos os seus usuários.