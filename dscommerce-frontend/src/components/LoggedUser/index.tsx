



import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import * as authService from "../../services/auth-service";
import { Link } from "react-router-dom";

export default function LoggedUser() {
        
    function handleLoggedClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    return(
        contextTokenPayload && authService.isAuthenticated()
        ? (
            <div className="dsc-logged-user">
                <p>{ contextTokenPayload.username }</p>
                <span onClick={handleLoggedClick}>Sair</span>
            </div>
        )
        : (
            <Link to="/login">
                Entrar
            </Link>
        )
    );
}