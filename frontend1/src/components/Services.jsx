function Servicos({ isLoggedIn, onOpenAuth }) {
  // Mock de 3 serviços
  const servicos = [
    {
      id: 1,
      titulo: "Consultoria Acadêmica",
      descricao:
        "Orientação personalizada para sua trajetória acadêmica e planejamento de disciplinas.",
      imagem: "/assets/services/consultoria.jpg",
    },
    {
      id: 2,
      titulo: "Design Gráfico",
      descricao:
        "Criação de banners, flyers e materiais visuais que representem a diversidade e inclusão.",
      imagem: "/assets/services/design.jpg",
    },
    {
      id: 3,
      titulo: "Oficinas de Inclusão",
      descricao:
        "Workshops práticos sobre conforto, acolhimento e empoderamento LGBTQIAPN+ no campus.",
      imagem: "/assets/services/oficina.jpg",
    },
  ];

  // Handler do botão de agendamento
  const handleAgendar = () => {
    if (isLoggedIn) {
      // Abre uma nova aba para a página de agendamentos
      window.open("/agendamentos", "_blank");
    } else {
      // Se não estiver logado, exibe o modal de login/cadastro
      onOpenAuth();
    }
  };

  return (
    <section
      id="servicos"
      className="py-16 bg-[var(--color-green)] bg-opacity-20"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-white mb-8">Serviços</h2>

        {/* Grid de 3 cartões de serviço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600">{servico.descricao}</p>
              </div>
              <button
                onClick={handleAgendar}
                className="bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white font-semibold py-3 px-8 rounded-full transition"
              >
                Agendar Serviço
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
