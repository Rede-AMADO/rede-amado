function AboutTeam() {
	const secao = (titulo, texto, imagem, lado = "esquerda") => (
		<div
			className={`flex flex-col md:flex-row items-center gap-8 py-10 ${
				lado === "direita" ? "md:flex-row-reverse" : ""
			}`}
		>
			<div className="md:w-1/2">
				<div className="bg-white p-2 rounded-xl shadow-lg h-64 flex items-center justify-center">
					<img
						src={imagem}
						alt={titulo}
						className="max-h-full object-contain"
					/>
				</div>
			</div>
			<div className="md:w-1/2 text-white">
				<h3 className="text-3xl font-bold mb-4">{titulo}</h3>
				<p className="text-slate-300 leading-relaxed">{texto}</p>
			</div>
		</div>
	);

	return (
		<section id="sobre-nos" className="py-16">
			<div className="max-w-6xl mx-auto px-4">
				{secao(
					"Quem Somos",
					"Somos uma rede formada por estudantes, educadores e voluntários que acreditam em uma sociedade mais inclusiva. Nosso propósito é fortalecer a voz da comunidade LGBTQIAPN+ dentro e fora do ambiente acadêmico.",
					"/assets/about/intro.jpg"
				)}

				{secao(
					"Nosso Objetivo",
					"Buscamos promover ações afirmativas, oferecer produtos com significado e criar um espaço seguro para que todos possam ser quem são, com orgulho e respeito.",
					"/assets/about/objetivo.jpg",
					"direita"
				)}

				{secao(
					"Nossa Filosofia",
					"Acreditamos que visibilidade é transformação. Nossos projetos, produtos e campanhas carregam mensagens de amor, respeito e liberdade. Aqui, cada cor tem sua voz.",
					"/assets/about/filosofia.jpg"
				)}
			</div>
		</section>
	);
}

export default AboutTeam;
