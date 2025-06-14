function Servicos({ isLoggedIn, onOpenAuth, userEmail }) {
    const servicos = [
        {
            id: 1,
            titulo: "Consultoria Acadêmica",
            descricao: "Orientação personalizada para sua trajetória acadêmica e planejamento de disciplinas.",
            imagem: "/assets/services/consultoria.jpg",
        },
        {
            id: 2,
            titulo: "Design Gráfico",
            descricao: "Criação de banners, flyers e materiais visuais que representem a diversidade e inclusão.",
            imagem: "/assets/services/design.jpg",
        },
        {
            id: 3,
            titulo: "Oficinas de Inclusão",
            descricao: "Workshops práticos sobre conforto, acolhimento e empoderamento LGBTQIAPN+ no campus.",
            imagem: "/assets/services/oficina.jpg",
        },
    ];

	const handleAgendar = async (servicoTitulo) => {
		if (!isLoggedIn) {
			onOpenAuth();
			return;
		}

		try {
			const response = await fetch('https://rede-amado.onrender.com/atendimentos/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					email: userEmail.trim(),
					servico: servicoTitulo.trim()
				})
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.detail || "Erro ao agendar serviço");
			}

			alert("Serviço agendado com sucesso!");
			
		} catch (error) {
			console.error("Erro completo:", error);
			alert(error.message);
		}
	};

    return (
        <section id="servicos" className="py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Serviços</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {servicos.map((servico) => (
                        <div
                            key={servico.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform flex flex-col justify-between"
                        >
                            <div className="bg-white h-48 flex items-center justify-center p-2">
                                <img
                                    src={servico.imagem}
                                    alt={servico.titulo}
                                    className="max-h-full object-contain"
                                />
                            </div>
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {servico.titulo}
                                </h3>
                                <p className="text-gray-600 flex-grow">{servico.descricao}</p>
                                <button
                                    onClick={() => handleAgendar(servico.titulo)}
                                    className="mt-4 mb-6 bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white font-semibold py-3 px-8 rounded-full transition"
                                >
                                    Agendar Serviço
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicos;