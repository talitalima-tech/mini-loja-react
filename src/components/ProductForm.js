import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const ProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            title: title,
            price: price,
            image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=500',
            description: 'Produto especial para pets. Ideal para deixar seu bichinho mais feliz!'
        };
        onAddProduct(newProduct);
        setTitle('');
        setPrice('');
    };

    return (
        <div className="surface-card p-5 shadow-3 border-round-xl border-top-3 border-teal-600">
            <form onSubmit={handleSubmit} className="p-fluid grid">
                <div className="field col-12 md:col-6">
                    <label className="font-bold">Nome do Produto</label>
                    <InputText placeholder="Ex: Caminha Fofa para Cachorro" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="field col-12 md:col-6">
                    <label className="font-bold">Preço de Venda (R$)</label>
                    <InputText placeholder="Ex: 50.00" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="col-12 md:col-4 md:col-offset-8">
                    <Button type="submit" label="Adicionar Produto" icon="pi pi-check" className="p-button-teal" />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;