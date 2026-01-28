import React from 'react';
import ProductList from '../components/ProductList';

const Storefront = ({ products, setProducts }) => {
    return (
        <div className="fadein">
            <div className="text-center mb-6">
                <h2 className="text-4xl text-teal-900 font-bold mb-2"> PetLovers Store</h2>
                <p className="text-600 text-lg">Tudo o que seu pet precisa para viver feliz e saudável!</p>
            </div>
            
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
};

export default Storefront;