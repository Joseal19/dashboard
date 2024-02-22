import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

const ShoppingCart = ({ produtosNoCarrinho, removerDoCarrinho }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const openSidebar = () => {
        setSidebarVisible(true);
    };

    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    const calcularTotal = () => {
        return produtosNoCarrinho.reduce((total, produto) => total + produto.price, 0).toFixed(2);
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
                    </ul>
                ) : (
                    <p>Nenhum item no carrinho.</p>
                )}
            </Sidebar>
        </div>
    );
};

export default ShoppingCart;
