import logo from "/assets/logo.png"; // Importe sua logo em /src/assets/logo.png

function Header({ onOpenAuth, isLoggedIn, userEmail }) {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      {/* 
        • fixed top-0 w-full: fixa o Header no topo, ocupando toda a largura da tela.
        • bg-white bg-opacity-90: fundo branco semi‐transparente (90% de opacidade) para
          deixar à mostra, levemente, o pano de fundo borrado atrás do header.
        • backdrop-blur-sm: adiciona um leve blur ao fundo do header para separar do conteúdo
          rolante (suporta navegadores modernos).
        • shadow-md: sombra média para destacar o header do restante da página.
        • z-50: posiciona o header acima de outros elementos (importante para manter fixo).
      */}
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        {/*
          • max-w-6xl mx-auto: limita a largura do conteúdo a ~72rem e centraliza horizontalmente.
          • h-16: altura fixa de 4rem (64px) para dar consistência ao layout.
          • flex items-center justify-between: cria um container flex, alinhando verticalmente
            ao centro e espaçando logo à esquerda e menu à direita.
          • px-4: padding horizontal de 1rem (16px) para folga nas extremidades em telas pequenas.
        */}

        {/* LOGO + MENU*/}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo da Rede"
            className="h-10 w-auto"
            // h-10: altura de 2.5rem (40px), w-auto mantém proporção.
          />

          {/* NAVEGAÇÃO À DIREITA*/}
          <nav className="px-8">
            <ul className=" flex space-x-8">
              {/*
              • flex: cria layout em linha para os itens de menu.
              • space-x-8: adiciona espaçamento horizontal de 2rem (32px) entre cada <li>.
            */}
              <li>
                <button className="rounded-md bg-slate-400 p-1.5">
                  <a
                    href="#noticias-slider"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    Notícias
                  </a>
                </button>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Loja
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nos"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* NAVEGAÇÃO À ESQUERDA*/}
        <nav className="px-8">
          <ul className=" flex space-x-8">
            {/*
              • flex: cria layout em linha para os itens de menu.
              • space-x-8: adiciona espaçamento horizontal de 2rem (32px) entre cada <li>.
            */}
            <li>
              <button>Contate-nos</button>
            </li>
            <li>
              {isLoggedIn ? (
                // Se estiver logado, mostra o e-mail como texto simples
                <span className="text-sm font-medium text-gray-800">
                  {userEmail}
                </span>
              ) : (
                // Senão, mostra o botão "Cadastre-se"
                <button
                  onClick={onOpenAuth}
                  className="text-sm font-medium bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white px-4 py-2 rounded-full transition"
                >
                  Cadastre-se
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
