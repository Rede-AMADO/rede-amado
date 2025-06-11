import { useState, useEffect } from "react";

function NewsSlider() {
	const [newsItems] = useState([
		{
			id: 1,
			image: "/assets/news1.png",
			title: "Evento de Inclusão Universitária",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
		},
		{
			id: 2,
			image: "/assets/news2.jpg",
			title: "Palestra sobre Direitos LGBTQIAPN+",
			description:
				"Cras suscipit, quam vitae luctus fermentum, urna nunc suscipit urna, sed aliquet lectus nunc nec urna.",
		},
		{
			id: 3,
			image: "/assets/news3.png",
			title: "Oficina de Expressão Artística",
			description:
				"Suspendisse potenti. Nulla facilisi. Quisque sit amet est et sapien ullamcorper pharetra.",
		},
		{
			id: 4,
			image: "/assets/news4.png",
			title: "Campanha de Conscientização",
			description:
				"Proin facilisis lorem at quam laoreet, sit amet gravida orci bibendum. Integer sit amet est ac elit.",
		},
		{
			id: 5,
			image: "/assets/news5.png",
			title: "Concurso Cultural Universitário",
			description:
				"Morbi commodo sem nec turpis convallis, id vehicula nisl luctus. Donec vel semper risus.",
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
		<section
			id="noticias-slider"
			className="py-30 bg-opacity-20"
		>
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-8 md:mb-0">
					<h3 className="text-4xl font-semibold text-white mb-4">
						{currentNews.title}
					</h3>
					<p className="text-slate-300">{currentNews.description}</p>
				</div>

				<div className="md:w-1/2 flex justify-center">
					<div className="w-80 h-48 rounded-2xl shadow-xl overflow-hidden">
						<img
							src={currentNews.image}
							alt={currentNews.title}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="mt-6 flex justify-center space-x-3">
				{newsItems.map((_, index) => (
					<button
						key={index}
						onClick={() => goToIndex(index)}
						className={`
							w-3 h-3 rounded-full transition-colors duration-200
							${currentIndex === index ? "bg-white" : "bg-gray-400"}
						`}
						aria-label={`Ir para notícia ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}

export default NewsSlider;
