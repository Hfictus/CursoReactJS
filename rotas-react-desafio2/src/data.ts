



const products = [
    {
        category: "computers",
        names: [
            {name: "Computador 1"},
            {name: "Computador 2"},
            {name: "Computador 3"}
        ]
    },
    {
        category: "electronics",
        names: [
            {name: "Eletrônico 1"},
            {name: "Eletrônico 2"},
            {name: "Eletrônico 3"}
        ]
    },
    {
        category: "books",
        names: [
            {name: "Livro 1"},
            {name: "Livro 2"},
            {name: "Livro 3"}
        ]
    }
];

export function getProducts() {
    return products;
}

export function getProduct(category : string | undefined) {
    return products.find((product) => product.category === category)
}