




import './styles.css';

export default function Products() {
    return(
        <main>
            <section>
                <div className="container navlink-container mt20">
                    <nav className="dflex ai">
                        <div className="link-highlight-or-access mr20">
                            Computadores
                        </div>
                        <div className="mr20">
                            Eletrônicos
                        </div>
                        <div className="mr20">
                            Livros
                        </div>
                    </nav>
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
