


import { Link } from "react-router-dom";
import { getProducts } from "../../data";

export default function ProductsNavLink() {
    
    const productsCategories = getProducts();

    return(
        <nav className="dflex ai">
            {
                productsCategories.map((prodCateg) => (
                    <Link
                        className="mr20"
                        to={`/products/${prodCateg.category}`}
                        key={prodCateg.category}
                    >
                        {prodCateg.category}                        
                    </Link>
                ))
            }
        </nav>
    );
}

