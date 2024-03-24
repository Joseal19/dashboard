import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';

const ShoppingCart = ({ produtosNoCarrinho, removerDoCarrinho }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');

    const openSidebar = () => {
        setSidebarVisible(true);
    };

    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    const calcularTotal = () => {
        return produtosNoCarrinho.reduce((total, produto) => total + produto.price, 0).toFixed(2);
    };

    // Função para construir o link do WhatsApp com os produtos, valores do pedido e informações de endereço
    const buildWhatsAppLink = () => {
        const mensagem = `Olá, gostaria de fazer o seguinte pedido:\n`;
        const produtos = produtosNoCarrinho.map(produto => `${produto.name} - R$ ${produto.price.toLocaleString('pt-BR')}`).join('\n');
        const total = `\nTotal: R$ ${calcularTotal().toLocaleString('pt-BR')}`;
        const enderecoMsg = endereco ? `\nEndereço: ${endereco}` : '';
        const cidadeMsg = cidade ? `\nCidade: ${cidade}` : '';

        // Número de telefone do WhatsApp
        const numeroWhatsApp = '5544999108873';

        // Montando o link
        const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem + produtos + total + enderecoMsg + cidadeMsg)}`;
        
        return link;
    };

    return (
        <div>
            <div>
                <Button
                    icon="pi pi-shopping-cart"
                    className='p-button-rounded p-button-raised drop-shadow-lg p-button-outlined w-full h-full z-40'
                    style={{ backgroundColor: 'white', fontSize: '1.5rem', padding: '1rem' }}
                    onClick={openSidebar}
                >
                    <Badge value={produtosNoCarrinho.length} />
                </Button>
            </div>
            <Sidebar visible={sidebarVisible} onHide={closeSidebar} header={<div className="font-bold flex justify-center">Carrinho de Compras</div>}>
                {produtosNoCarrinho.length > 0 ? (
                    <ul className='mt-10'>
                        {produtosNoCarrinho.map((produto, index) => (
                            <li key={index} className='flex justify-between'>
                                <span>{produto.name} - ${produto.price}</span>
                                <Button icon="pi pi-trash" onClick={() => removerDoCarrinho(index)} className="p-button-rounded p-button-outlined p-button-danger" />
                            </li>
                        ))}
                        <li className='flex justify-between mt-4 font-bold'>
                            <span>Total:</span>
                            <span>${calcularTotal()}</span>
                        </li>
                        <li className='mt-4'>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-map-marker"></i>
                                </span>
                                <InputText placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="p-d-block" />
                            </div>
                        </li>
                        <li className='mt-2'>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-map"></i>
                                </span>
                                <InputText placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} className="p-d-block" />
                            </div>
                        </li>
                        <li className='mt-4'>
                            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                <Button label="Enviar Pedido via WhatsApp" className="p-button-success" />
                            </a>
                        </li>
                    </ul>
                ) : (
                    <p>Nenhum item no carrinho.</p>
                )}
            </Sidebar>
        </div>
    );
};

export default ShoppingCart;
