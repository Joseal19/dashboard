export const ProductService = {
    getProdutosDoce() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Pudim',
                description: 'Product Description',
                image: 'pudim.jpeg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Bolo de Chocolate',
                description: 'Product Description',
                image: 'bolo-chocolate.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Bolo de Laranja',
                description: 'Product Description',
                image: 'bolo-laranja.jpeg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Bolo de Limão',
                description: 'Product Description',
                image: 'bolo-laranja.jpeg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bolo de Leite ninho',
                description: 'Product Description',
                image: 'bolo-laranja.jpeg',
                price: 15,
                quantity: 73,
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Bolo de Prestigio',
                description: 'Product Description',
                image: 'bolo-laranja.jpeg',
                price: 120,
                quantity: 0,
                rating: 4
            },
        ];
    },


    getProductsMini() {
        return Promise.resolve(this.getProdutosDoce().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProdutosDoce().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProdutosDoce());
    },

};

