


import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
    return(
        <header>
            <div className="dflex">
                <Link to="/home">
                    <h1>Github API</h1>
                </Link>
            </div>            
        </header>
    );
}