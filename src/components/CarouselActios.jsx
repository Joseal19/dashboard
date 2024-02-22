import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import ShoppingCart from './ShoppingCart';
import { ProductService } from '../service/ProductService';
import { Card } from 'primereact/card';
import { useToast } from '../components/ToastProvider';

const CarouselActions = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [carrinho, setCarrinho] = useState([]);
    const { showToast } = useToast();

    // funcao para adicionar produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
        showToast({ severity: 'success', summary: 'Carrinho', detail: 'Produto adicionado ao carrinho!' });
    };

    // opcoes responsivas para o componente Carousel
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    // efeito para carregar os produtos pequenos ao montar o componente
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product, index) => {
        return (
            <div key={index} className="surface-border rounded border-gray-600 border-spacing-2 border m-2 text-center py-5 text-gray-600">
                <div className="mb-3 flex justify-center">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-1/2 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded rounded border-gray-600 border" onClick={() => openDialog(product)} />
                        <Button icon="pi pi-shopping-cart" className="p-button-success p-button-rounded rounded border-gray-600 border" onClick={() => adicionarAoCarrinho(product)} />
                    </div>
                </div>
            </div>
        );
    };

    // funcao para abrir o dialogo com os detalhes do produto
    const openDialog = (product) => {
        setSelectedProduct(product);
        setDialogVisible(true);
    };

    // funcao para fechar o dialogo
    const onHideDialog = () => {
        setDialogVisible(false);
    };

    // funcao para remover produto do carrinho
    const removerDoCarrinho = (index) => {
        const novosProdutos = [...carrinho];
        novosProdutos.splice(index, 1);
        setCarrinho(novosProdutos);
    };

    return (
        <div className='h-full w-full'>
            <Card className='h-full bg-[#f9fafb]'>
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} />
            </Card>

            <Dialog className='flex' visible={dialogVisible} onHide={onHideDialog} header={<div className="z-30 font-bold flex justify-center">Detalhes do Produto</div>}>
                {selectedProduct && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='flex justify-center col-span-1 sm:col-span-2 mt-5'>
                            <h2>{selectedProduct.name}</h2>
                        </div>
                        <div className='flex justify-center col-span-1 sm:col-span-2'>
                            <img src={`https://primefaces.org/cdn/primereact/images/product/${selectedProduct.image}`} alt={selectedProduct.name} className="drop-shadow-xl rounded-md shadow-2" />
                        </div>
                        <p>Descrição: {selectedProduct.description}</p>
                        <p>Preço: ${selectedProduct.price}</p>
                        <p>Categoria: {selectedProduct.category}</p>
                        <p>Quantidade: {selectedProduct.quantity}</p>
                        <p>Status do Inventário: {selectedProduct.inventoryStatus}</p>
                        <p>Classificação: {selectedProduct.rating}</p>
                        <div className='col-span-1 sm:col-span-2 justify-end flex'>
                            <Button icon="pi pi-shopping-cart" className='p-button-rounded p-button-raised p-button-outlined bg-' onClick={() => adicionarAoCarrinho(selectedProduct)} />
                        </div>
                    </div>
                )}
            </Dialog>

            <div className='fixed top-1/2 left-4 transform -translate-y-1/2'>
                <ShoppingCart produtosNoCarrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
            </div>

        </div>
    );
};

export default CarouselActions;
