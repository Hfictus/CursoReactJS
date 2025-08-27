




import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";
import * as productService from "../../services/product-service";
import { useContext, useState } from "react";
import type { ProductDTO } from "../../models/product";
import { ContextProductCount } from "../../utils/context-product";

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(
        productService.findByPrice(0, Number.MAX_VALUE)
    );
    
    const { setContextProductCount } = useContext(ContextProductCount);

    setContextProductCount(products.length);

    function handleFilter(min: number, max: number) {
        const prods = productService.findByPrice(min, max);
        if(prods.length != 0) {
            setProducts(prods);
        }
    }
        
    return(
        <section>
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </section>
    );
}