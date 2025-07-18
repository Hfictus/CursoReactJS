

import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';
import * as productService from "../../../services/product-service"

export default function ProductDetails() {
    
    const params = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(() => {
            navigate("/");
        })
    }, [params.productId, navigate]);


    return(
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <ProductDetailsCard product={product} />
                }


                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <Link to="/">
                        <ButtonInverse text="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}