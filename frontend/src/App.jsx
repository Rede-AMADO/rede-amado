import { useState } from "react";
import { CarrinhoProvider } from "./components/CarrinhoContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsSlider from "./components/NewsSlider";
import ProductSlider from "./components/ProductSlider";
import AboutTeam from "./components/AboutTeam";
import Services from "./components/Services";
import Auth from "./components/Auth";
import CarrinhoModal from "./components/CarrinhoModal";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleAuthSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setIsAuthOpen(false);
  };

  return (
    <CarrinhoProvider>
      <div className="flex flex-col min-h-screen">
        <Header
          onOpenAuth={() => setIsAuthOpen(true)}
          isLoggedIn={isLoggedIn}
          userEmail={userEmail}
        />

        <main className="flex-1 mt-16 mb-16">
          <section id="noticias-slider" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <NewsSlider />
            </div>
          </section>

          <section id="product-slider" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <ProductSlider />
            </div>
          </section>

          <section id="service" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <Services
                isLoggedIn={isLoggedIn}
                onOpenAuth={() => setIsAuthOpen(true)}
              />
            </div>
          </section>

          <section id="equipe" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-5xl font-semibold text-white mb-6">
                Sobre a Equipe
              </h2>
              <AboutTeam />
            </div>
          </section>
        </main>

        <Footer />
        <Auth
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
        <CarrinhoModal />
      </div>
    </CarrinhoProvider>
  );
}

export default App;