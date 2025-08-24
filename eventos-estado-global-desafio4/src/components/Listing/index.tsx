



import type { ProductDTO } from "../../models/product";
import "./styles.css";


type Props = {
    products: ProductDTO[];
}

export default function Listing({ products }: Props) {
         
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

