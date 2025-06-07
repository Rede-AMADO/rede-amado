import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsSlider from "./components/NewsSlider"; // lista de cards de notícia
import ProductSlider from "./components/ProductSlider"; // lista de cards de produtos
import AboutTeam from "./components/AboutTeam"; // seção “Sobre a Equipe”
import Services from "./components/Services"; // seção “Serviços e Produtos”
import Auth from "./components/Auth";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  // Chamado pelo AuthModal quando o login/cadastro for bem‐sucedido
  const handleAuthSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setIsAuthOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/*
        ------------------------------------------------------------------
        Header fixo no topo:
        - fixed top-0: mantém o Header sempre visível lá em cima
        - w-full: ocupa 100% da largura
        - z-50: garante que fique acima de outros elementos
        Caso o seu Header.jsx já contenha "fixed top-0 w-full z-50" internamente,
        você não precisa recriar essas classes aqui. Este comentário é só
        para reforçar o porquê do espaço (padding) que daremos depois.
        ------------------------------------------------------------------
      */}
      <Header
        onOpenAuth={() => setIsAuthOpen(true)}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
      />

      {/*
        ------------------------------------------------------------------
        Conteúdo principal (main):
        - flex-1: faz essa área ocupar todo o espaço disponível entre
          Header e Footer
        - mt-16: margem-top para “empurrar” o conteúdo para baixo,
          evitando ficar escondido atrás do Header (assumindo que
          seu Header tem altura aproximada de h-16 = 4rem = 64px)
        - mb-16: margem-bottom para “empurrar” o conteúdo para cima,
          evitando ficar escondido atrás do Footer (assumindo
          que seu Footer tem altura de h-16 = 64px)
        Obs.: Ajuste “mt-16” e “mb-16” conforme a altura exata que definir
        para Header e Footer. Se seu Header for menor, por exemplo h-12,
        use “mt-12”. 
        ------------------------------------------------------------------
      */}
      <main className="flex-1 mt-16 mb-16">
        {/*
          ----------------------------------------------------------------
          Seção 1: Notícias
          - id="noticias": liga ao menu de navegação caso queira âncoras
            internas (por exemplo, <a href="#noticias">Notícias</a>)
          - py-12: padding vertical (top e bottom) de 3rem (48px)
          - bg-gray-50: fundo levemente cinza para destacar da seção seguinte
          - Aqui vamos renderizar o componente que mostra todos os cards de notícias.
          ----------------------------------------------------------------
        */}
        <section id="noticias-slider" className="py-12 ">
          <div className="max-w-6xl mx-auto px-4">
            {/*
              Se o seu componente <NewsList /> já renderiza internamente os cards
              em grid ou lista, basta chamá-lo. Caso contrário, coloque aqui
              manualmente <NewsCard /> mapeados a partir de um array.
            */}
            <NewsSlider />
          </div>
        </section>

        {/*
          ----------------------------------------------------------------
          Seção 1: Notícias
          - id="noticias": liga ao menu de navegação caso queira âncoras
            internas (por exemplo, <a href="#noticias">Notícias</a>)
          - py-12: padding vertical (top e bottom) de 3rem (48px)
          - bg-gray-50: fundo levemente cinza para destacar da seção seguinte
          - Aqui vamos renderizar o componente que mostra todos os cards de notícias.
          ----------------------------------------------------------------
        */}
        <section id="product-slider" className="py-12 ">
          <div className="max-w-6xl mx-auto px-4">
            {/*
              Se o seu componente <NewsList /> já renderiza internamente os cards
              em grid ou lista, basta chamá-lo. Caso contrário, coloque aqui
              manualmente <NewsCard /> mapeados a partir de um array.
            */}
            <ProductSlider />
          </div>
        </section>

        <section id="service" className="py-12 ">
          <div className="max-w-6xl mx-auto px-4">
            {/*
              Se o seu componente <NewsList /> já renderiza internamente os cards
              em grid ou lista, basta chamá-lo. Caso contrário, coloque aqui
              manualmente <NewsCard /> mapeados a partir de um array.
            */}
            <Services
              isLoggedIn={isLoggedIn}
              onOpenAuth={() => setIsAuthOpen(true)}
            />
          </div>
        </section>

        {/*
          ----------------------------------------------------------------
          Seção 2: Sobre a Equipe de Desenvolvimento
          - id="equipe": possibilita linkar por âncora (se quiser navegar direto)
          - py-12: espaçamento vertical (48px nos dois lados)
          - bg-white: fundo branco para criar contraste entre as seções
          - Nesta seção, você pode incluir um texto descritivo, fotos dos
            integrantes, ícones ou qualquer layout que tenha prototipado no Canva.
          ----------------------------------------------------------------
        */}
        <section id="equipe" className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            {/* Título da seção */}
            <h2 className="text-5xl font-semibold text-white mb-6">
              Sobre a Equipe
            </h2>

            {/*
              Se o componente <AboutTeam /> já renderiza cards ou perfis
              dos desenvolvedores (foto, nome, função, breve descrição, etc.),
              basta chamá-lo aqui. Caso ainda não exista, use este comentário
              como placeholder e logo torne-o um arquivo separado em
              src/components/AboutTeam.jsx.
            */}
            <AboutTeam />
          </div>
        </section>

        {/*
          ----------------------------------------------------------------
          Seção 3: Principais Serviços e Produtos
          - id="servicos-produtos": novamente, permite navegação por âncora
          - py-12: padding vertical de 48px
          - bg-gray-50: leve cinza para diferenciar da seção de “Sobre a Equipe”
          - Nesta parte, você pode mostrar cards ou boxes com cada serviço
            (por exemplo, “Desenvolvimento de Sites”, “Design Gráfico”)
            e produtos que o seu protótipo Canva incluiu. 
          ----------------------------------------------------------------
        */}
      </main>

      {/*
        --------------------------------------------------------------------
        Footer fixo na parte inferior:
        - fixed bottom-0: fixa no rodapé da tela
        - w-full: ocupa 100% da largura
        - z-40: fica abaixo do Header (que estava com z-50), mas acima
          do conteúdo (caso algo role por baixo dele)
        - bg-gray-800 text-gray-300: cores de exemplo (você pode escolher
          outras de acordo com o estilo da sua universidade)
        - h-16: altura de 4rem (64px); certifique-se de que “mb-16” no main
          seja igual a esta altura, para não sobrepor conteúdo.
        --------------------------------------------------------------------
      */}
      <Footer />

      <Auth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;
