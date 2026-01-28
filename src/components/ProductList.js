import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ products, setProducts }) => {
    
    useEffect(() => {
        if (products.length === 0) {
            axios.get('https://fakestoreapi.com/products?limit=6')
                .then(res => {
                    const artData = res.data.map((item, index) => ({
                        ...item,
                        // 💡 ALTERE AQUI: O nome padrão dos itens vindos da API e a descrição
                        title: `Produto Pet #${item.id}`,
                        description: 'Item essencial para o conforto, diversão e bem-estar do seu pet. Produto seguro e de alta qualidade.',
                        // 💡 ALTERE AQUI: O termo de busca para as fotos (ex: 'dog', 'fashion', 'tech')
                        image: `https://source.unsplash.com/random/500x500/?pet&w=500&sig=${index}`,
                    }));
                    setProducts(artData);
                })
                .catch(err => console.error(err));
        }
    }, [setProducts, products.length]);

    return (
        <div className="grid">
            {products.map(item => (
                <div key={item.id} className="col-12 sm:col-6 lg:col-4 p-2">
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;