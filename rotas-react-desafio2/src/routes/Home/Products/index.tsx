




import { Outlet } from 'react-router-dom';
import ProductsNavLink from '../../../components/ProductsNavLink';
import './styles.css';

export default function Products() {
    return(
        <main>
            <section>
                <div className="container mt20">
                    <div className="navlink-container">
                        <ProductsNavLink />
                    </div>
                    <div className="mt20 productsCard">
                        <Outlet />
                    </div>
                </div>
            </section>    
        </main>
    );
}
