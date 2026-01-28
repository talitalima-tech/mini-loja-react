import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const ProductCard = ({ product }) => {
    const [visible, setVisible] = useState(false);

    const header = (
        <img alt={product.title} src={product.image} style={{ height: '230px', objectFit: 'cover' }} />
    );

    return (
        <>
            <Card title={<div className="truncate font-bold">{product.title}</div>} subTitle={`R$ ${product.price}`} header={header} className="shadow-2 hover:shadow-5 transition-duration-300 border-none">
                <Button label="Ver Detalhes" icon="pi pi-search" className="p-button-outlined p-button-teal w-full" onClick={() => setVisible(true)} />
            </Card>

            <Dialog header="Detalhes do Produto" visible={visible} style={{ width: '90vw', maxWidth: '450px' }} onHide={() => setVisible(false)}>
                <img src={product.image} alt={product.title} className="w-full border-round mb-3 shadow-2" />
                <h2 className="text-teal-900 m-0">{product.title}</h2>
                <h3 className="text-teal-600 mb-3">R$ {product.price}</h3>
                <p className="text-700 line-height-3">{product.description}</p>
                {/* 💡 ALTERE AQUI: O rótulo do botão final de compra ou contato */}
                <Button label="Adicionar ao Carrinho" className="p-button-teal w-full mt-3" onClick={() => setVisible(false)} />
            </Dialog>
        </>
    );
};

export default ProductCard;

