import logo from "/assets/logo.png";
import { useCarrinho } from "../components/CarrinhoContext";
import CarrinhoModal from "../components/CarrinhoModal";

function Header({ onOpenAuth, isLoggedIn, userEmail }) {
  const { totalItens, setIsCarrinhoOpen } = useCarrinho();

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo da Rede" className="h-10 w-auto" />

          <nav className="px-8">
            <ul className="flex space-x-8">
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

        <nav className="px-8">
          <ul className="flex items-center space-x-8">
            <li>
              <button>Contate-nos</button>
            </li>
            {isLoggedIn && (
              <li>
                <button 
                  onClick={() => setIsCarrinhoOpen(true)}
                  className="relative p-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  {totalItens > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItens}
                    </span>
                  )}
                </button>
              </li>
            )}
            <li>
              {isLoggedIn ? (
                <span className="text-sm font-medium text-gray-800">
                  {userEmail}
                </span>
              ) : (
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
      <CarrinhoModal />
    </header>
  );
}

export default Header;