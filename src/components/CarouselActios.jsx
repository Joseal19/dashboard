import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../service/ProductService';
import { Card } from 'primereact/card';

const CarouselActios = () => {
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="surface-border rounded border-gray-600 border-spacing-2 border m-2 text-center py-5 text-gray-600">
                <div className="mb-3 flex justify-center">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-1/2 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded rounded border-gray-600 border" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded rounded border-gray-600 border" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Card className='h-full bg-[#f9fafb]'>
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
        autoplayInterval={3000} itemTemplate={productTemplate} />
        </Card>
    )
};

export default CarouselActios;
