



import { useParams } from "react-router-dom";
import { getProduct } from '../../../../data';

export default function Product() {
    
    const params = useParams();
    
    const product = getProduct(params.productId);

    return(
        <>
            {
                product &&
                <main>
                    <div>
                        {product.names.map((item, index) => (
                            <p key={index}>{item.name}</p>
                        ))}
                    </div>
                </main>
            }
        </>
    );
}