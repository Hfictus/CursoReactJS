



const products = [
    {
        category: "Computadores",
        url: "computers",
        names: [
            {id: 1, name: "Computador 1"},
            {id: 2, name: "Computador 2"},
            {id: 3, name: "Computador 3"}
        ]
    },
    {
        category: "Eletrônicos",
        url: "electronics",
        names: [
            {id: 4, name: "Eletrônico 1"},
            {id: 5, name: "Eletrônico 2"},
            {id: 6, name: "Eletrônico 3"}
        ]
    },
    {
        category: "Livors",
        url: "books",
        names: [
            {id: 7, name: "Livro 1"},
            {id: 8, name: "Livro 2"},
            {id: 9, name: "Livro 3"}
        ]
    }
];

export function getProducts() {
    return products;
}

export function getProduct(url : string | undefined) {
    return products.find((product) => product.url === url)
}

