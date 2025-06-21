



import { useParams } from "react-router-dom";
import { getProduct } from '../../../../data';
import './styles.css';


export default function Product() {
    
    const params = useParams();
    
    const product = getProduct(params.productId);

    return(
        <>
            {
                product &&
                <main>
                    <div className="productsCard">
                        {product.names.map((itemOfNames) => (
                            <p key={itemOfNames.id}>{itemOfNames.name}</p>
                        ))}
                    </div>
                </main>
            }
        </>
    );
}