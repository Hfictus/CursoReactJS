




import ProductsNavLink from '../../../components/ProductsNavLink';
import './styles.css';

export default function Products() {
    return(
        <main>
            <section>
                <div className="container navlink-container mt20">
                    <ProductsNavLink />
                </div>
                <div className="container mt20 productsCard">
                    <div>Computador 1</div>
                    <div>Computador 2</div>
                    <div>Computador 3</div>
                </div>
            </section>    
        </main>
    );
}
