import { useCarrinho } from '../components/CarrinhoContext';

function CarrinhoModal() {
	const {
		carrinho,
		removerDoCarrinho,
		atualizarQuantidade,
		valorTotal,
		isCarrinhoOpen,
		setIsCarrinhoOpen
	} = useCarrinho();

	if (!isCarrinhoOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">Seu Carrinho</h2>
					<button 
						onClick={() => setIsCarrinhoOpen(false)}
						className="text-gray-500 hover:text-gray-700"
					>
						✕
					</button>
				</div>

				{carrinho.length === 0 ? (
					<p className="text-center py-8">Seu carrinho está vazio</p>
				) : (
					<>
						<div className="space-y-4">
							{carrinho.map(item => (
								<div key={item.id} className="flex items-center border-b pb-4">
									<img 
										src={item.imagem} 
										alt={item.nome} 
										className="w-16 h-16 object-cover rounded"
									/>
									<div className="ml-4 flex-1">
										<h3 className="font-medium">{item.nome}</h3>
										<p className="text-sm text-gray-600">{item.preco}</p>
									</div>
									<div className="flex items-center">
										<button
											onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
											className="px-2 py-1 bg-gray-200 rounded-l"
										>
											-
										</button>
										<span className="px-2 py-1 bg-gray-100">{item.quantidade}</span>
										<button
											onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
											className="px-2 py-1 bg-gray-200 rounded-r"
										>
											+
										</button>
									</div>
									<button
										onClick={() => removerDoCarrinho(item.id)}
										className="ml-2 text-red-500"
									>
										✕
									</button>
								</div>
							))}
						</div>

						<div className="mt-6 border-t pt-4">
							<div className="flex justify-between font-bold">
								<span>Total:</span>
								<span>R$ {valorTotal}</span>
							</div>
							<button className="mt-4 w-full bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white py-2 rounded">
								Finalizar Compra
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default CarrinhoModal;
