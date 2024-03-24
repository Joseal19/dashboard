
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';
import { Card } from 'primereact/card';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const getImagePath = (imageName) => {
        try {
            return require(`../assets/img/${imageName}`).default;
        } catch (error) {
            console.error(`Erro ao carregar imagem: ${imageName}`);
            return null;
        }
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;
    return (
        <div className="mb-5">
            <Card>
                <DataTable className='' value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="name" header="Nome"></Column>
                    <Column header="Imagem" body={(rowData) => <img src={getImagePath(rowData.image)} alt={rowData.name} />} />
                    <Column field="price" header="Preço" body={priceBodyTemplate}></Column>
                </DataTable>
            </Card>
        </div>
    );
}

export default ProductList;