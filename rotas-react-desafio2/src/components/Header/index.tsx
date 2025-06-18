

import './styles.css';
import homeIcon from '../../assets/home-icon.svg';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="dflex ai">
            <div className="container dflex jc">
                <nav className="dflex ai">
                    <div className="mr20">
                        <NavLink 
                            to="/home" 
                            className={
                                ({isActive}) => {if(isActive) return "link-accessed"}
                            }>
                            Início
                        </NavLink>
                    </div>
                    <div className="mr20">
                        <NavLink 
                            to="/products" 
                            className={
                                ({isActive}) => {if(isActive) return "link-accessed"}
                            }>
                            Produtos
                        </NavLink>
                    </div>
                    <div className="mr20">
                        <NavLink 
                            to="/about"
                            className={
                                ({isActive}) => {if(isActive) return "link-accessed"}
                            }>
                            Sobre nós
                        </NavLink>
                    </div>
                </nav>
                <div>
                    <Link to="/home">
                        <img src={homeIcon} alt="Home icon" />
                    </Link>
                </div>
            </div>
        </header>
    );
}