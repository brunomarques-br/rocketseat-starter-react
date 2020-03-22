import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    // Criando uma variável de estado, lembrando que state é sempre um objeto
    state = {
        products: [],
    }

    // Executa uma ação logo que o componente é exibido em tela.
    componentDidMount() {
        this.loadProducts();
    }

    // Utilizando async => await para garantir que a promisse seja entregue a variavel definida para continuar.
    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({ products: response.data.docs });
    }

    render() {
        const {products} = this.state;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a target="_blank" href={product.url}>Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}
