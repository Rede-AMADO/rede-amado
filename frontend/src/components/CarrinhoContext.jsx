/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => {
      const existe = prev.find(item => item.id === produto.id);
      if (existe) {
        return prev.map(item =>
          item.id === produto.id 
            ? { ...item, quantidade: item.quantidade + 1 } 
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id, quantidade) => {
    if (quantidade <= 0) {
      removerDoCarrinho(id);
      return;
    }
    
    setCarrinho(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const valorTotal = carrinho.reduce(
    (total, item) => total + (parseFloat(item.preco.replace('R$ ', '').replace(',', '.')) * item.quantidade), 
    0
  ).toFixed(2);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        atualizarQuantidade,
        totalItens,
        valorTotal,
        isCarrinhoOpen,
        setIsCarrinhoOpen
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);