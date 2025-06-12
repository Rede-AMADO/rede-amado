import { useState, useEffect } from "react";

function NewsSlider() {
	const [newsItems] = useState([
		{
			id: 1,
			image: "/assets/news1.png",
			title: "Evento de Inclusão Universitária",
			description:
				"Reunimos estudantes, professores e ativistas para debater práticas inclusivas no ambiente acadêmico.",
		},
		{
			id: 2,
			image: "/assets/news2.jpg",
			title: "Palestra sobre Direitos LGBTQIAPN+",
			description:
				"Especialistas compartilharam avanços e desafios enfrentados pela comunidade dentro e fora da universidade.",
		},
		{
			id: 3,
			image: "/assets/news3.png",
			title: "Oficina de Expressão Artística",
			description:
				"Participantes exploraram sua criatividade por meio da arte como forma de representatividade e resistência.",
		},
		{
			id: 4,
			image: "/assets/news4.jpg",
			title: "Campanha de Conscientização",
			description:
				"Lançamos ações visuais e interativas no campus para fortalecer o respeito à diversidade.",
		},
		{
			id: 5,
			image: "/assets/news5.jpg",
			title: "Concurso Cultural Universitário",
			description:
				"Estudantes apresentaram projetos sobre inclusão e diversidade, destacando talentos da comunidade.",
		},
	]);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % newsItems.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [newsItems.length]);

	const currentNews = newsItems[currentIndex];

	const goToIndex = (index) => {
		setCurrentIndex(index);
	};

	return (
		<section id="noticias-slider" className="py-36">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
				<div className="md:w-1/2">
					<h3 className="text-5xl font-bold text-white mb-6">{currentNews.title}</h3>
					<p className="text-lg text-slate-300 leading-relaxed">
						{currentNews.description}
					</p>
				</div>

				<div className="md:w-1/2 flex justify-center">
					<div className="bg-white w-[500px] h-[300px] flex items-center justify-center p-4 rounded-2xl shadow-xl">
						<img
							src={currentNews.image}
							alt={currentNews.title}
							className="max-h-full max-w-full object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-10 flex justify-center space-x-3">
				{newsItems.map((_, index) => (
					<button
						key={index}
						onClick={() => goToIndex(index)}
						className={`w-3.5 h-3.5 rounded-full transition-colors duration-200 hover:-translate-y-1.5 hover:border-1 hover:border-b-orange-500 ${
							currentIndex === index ? "bg-white" : "bg-gray-400"
						}`}
						aria-label={`Ir para notícia ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}

export default NewsSlider;