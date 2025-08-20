


import * as productService from "../../services/product-service"
import "./styles.css";

export default function Listing() {
    
    const products = productService.findByPrice(0, Number.MAX_VALUE);
     
    return(
        <div className="eegd4-container listing-container">
            {
                products.map(product =>
                    <div key={product.id} className="product-card mt10 mb10">
                        <h2 className="f-w400">
                            {product.name}
                        </h2>
                        <p className="f-w700">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                )
            }
        </div>
    );
}

