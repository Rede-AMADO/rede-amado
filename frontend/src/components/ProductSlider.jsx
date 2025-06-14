import { useState } from "react";
import { useCarrinho } from "../components/CarrinhoContext";

function ProductSlider() {
	const { adicionarAoCarrinho } = useCarrinho();

	const produtosPorFiltro = {
		camisetas: [
			{
				id: 1,
				nome: "Camiseta Arco-Íris",
				preco: "R$ 49,90",
				imagem: "/assets/shop/camiseta1.jpg",
			},
			{
				id: 2,
				nome: "Camiseta Trans",
				preco: "R$ 54,90",
				imagem: "/assets/shop/camiseta2.jpg",
			},
			{
				id: 3,
				nome: "Camiseta Não-Binário",
				preco: "R$ 52,90",
				imagem: "/assets/shop/camiseta3.jpg",
			},
			{
				id: 4,
				nome: "Camiseta Acolhimento",
				preco: "R$ 58,90",
				imagem: "/assets/shop/camiseta4.jpg",
			},
		],
		acessorios: [
			{
				id: 5,
				nome: "Pulseira Orgulho",
				preco: "R$ 19,90",
				imagem: "/assets/shop/pulseira1.jpg",
			},
			{
				id: 6,
				nome: "Boné Inclusivo",
				preco: "R$ 39,90",
				imagem: "/assets/shop/bone1.jpg",
			},
			{
				id: 7,
				nome: "Chaveiro Resistência",
				preco: "R$ 15,00",
				imagem: "/assets/shop/chaveiro1.jpg",
			},
			{
				id: 8,
				nome: "Bandana Color",
				preco: "R$ 22,50",
				imagem: "/assets/shop/bandana1.jpg",
			},
		],
		bandeiras: [
			{
				id: 9,
				nome: "Bandeira LGBTQIAPN+",
				preco: "R$ 29,90",
				imagem: "/assets/shop/bandeira1.jpg",
			},
			{
				id: 10,
				nome: "Bandeira Trans",
				preco: "R$ 32,90",
				imagem: "/assets/shop/bandeira2.jpg",
			},
			{
				id: 11,
				nome: "Bandeira Bi",
				preco: "R$ 28,00",
				imagem: "/assets/shop/bandeira3.jpg",
			},
			{
				id: 12,
				nome: "Bandeira Não-Binárie",
				preco: "R$ 30,50",
				imagem: "/assets/shop/bandeira4.jpg",
			},
		],
		todos: [],
	};

	produtosPorFiltro.todos = [
		...produtosPorFiltro.camisetas,
		...produtosPorFiltro.acessorios,
		...produtosPorFiltro.bandeiras,
	];

	const [filtroSelecionado, setFiltroSelecionado] = useState("todos");
	const produtos = produtosPorFiltro[filtroSelecionado];

	return (
		<section id="produtos" className="py-16">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<h2 className="text-4xl font-semibold text-white mb-4">LOJA AMADO</h2>
				<p className="text-lg text-white mb-8">
					Orgulho que se veste, apoia e transforma
				</p>

				<div className="flex justify-center gap-10 flex-wrap mb-10 p-4 bg-white rounded-2xl">
					{["todos", "camisetas", "acessorios", "bandeiras"].map((filtro) => (
						<button
							key={filtro}
							onClick={() => setFiltroSelecionado(filtro)}
							className={`px-4 py-2 rounded-full font-medium border transition 
								${
									filtroSelecionado === filtro
										? "bg-white text-gray-900"
										: "bg-transparent border- text-white hover:bg-white hover:text-gray-900"
								}`}
						>
							{filtro === "todos" ? "Todos" : filtro.charAt(0).toUpperCase() + filtro.slice(1)}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{produtos.map((produto) => (
						<div
							key={produto.id}
							className="bg-[url(/assets/bg-rainbow-header.jpeg)] bg-cover bg-opacity-90 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
						>
							<img
								src={produto.imagem}
								alt={produto.nome}
								className="w-full h-48 object-contain bg-white p-2 rounded-lg"
							/>
							<div className="p-4 text-left">
								<h3 className="text-lg font-semibold text-gray-800">
									{produto.nome}
								</h3>
								<p className="text-sm text-black mb-2">{produto.preco}</p>
								<button 
									onClick={() => adicionarAoCarrinho(produto)}
									className="mt-2 w-full py-2 bg-[var(--color-blue)] text-white rounded-full hover:bg-[var(--color-purple)] transition"
								>
									Adicionar ao Carrinho
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProductSlider;
