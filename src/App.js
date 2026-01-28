import React, { useState, useEffect } from 'react';

import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import { Button } from 'primereact/button';

import Storefront from './views/Storefront';
import ProductForm from './components/ProductForm';


function App() {
  // 💡 ALTERE AQUI: O estado agora tenta buscar dados do localStorage primeiro. 
  // Se não tiver nada lá, ele começa com um array vazio.
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('meuPetShop');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [view, setView] = useState('loja');

  // 💡 ALTERE AQUI: Toda vez que a lista de produtos mudar, nós salvamos no "armário" do navegador
  useEffect(() => {
    localStorage.setItem('meuPetShop', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
    setView('loja'); 
  };

  return (
    <div className="bg-bluegray-50 min-h-screen">
      <header className="bg-teal-700 text-white p-4 shadow-3">
        <div className="max-w-custom mx-auto flex justify-content-between align-items-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 className="m-0 text-xl md:text-2xl font-light tracking-wide cursor-pointer" onClick={() => setView('loja')}>
            <i className="pi pi-palette mr-2"></i> ARTES & CORES
          </h1>
          
          <Button 
            label={view === 'loja' ? "Cadastrar Nova Arte" : "Voltar para Galeria"} 
            icon={view === 'loja' ? "pi pi-plus" : "pi pi-arrow-left"} 
            className="p-button-sm p-button-info"
            onClick={() => setView(view === 'loja' ? 'cadastro' : 'loja')}
          />
        </div>
      </header>

      <main className="p-4 md:p-6 mx-auto" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {view === 'loja' ? (
          <Storefront products={products} setProducts={setProducts} />
        ) : (
          <div className="fadein">
            <h2 className="text-teal-900 mb-4">Novo Item no Acervo</h2>
            <ProductForm onAddProduct={addProduct} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;