


import { NavLink } from "react-router-dom";
import { getProducts } from "../../data";

export default function ProductsNavLink() {
    
    const productsCategories = getProducts();

    return(
        <nav className="dflex ai">
            {
                productsCategories.map((prodCateg) => (
                    <div className="mr20">
                        <NavLink
                            className={
                                ({isActive}) => {if(isActive) return "link-accessed"}
                            }
                            to={`/products/${prodCateg.url}`}
                            key={prodCateg.category}
                        >
                            {prodCateg.category}                        
                        </NavLink>
                    </div>
                ))
            }
        </nav>
    );
}

