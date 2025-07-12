




import { Link } from "react-router-dom";
import StartButton from "../../../components/StartButton";
import "./styles.css";

export default function HomeBody() {
    return(
        <main className="bg-color-home-page">
            <section id="page-home-section">
                <div>
                    <div className="start-page-titles">
                        <h2>Desafio Github API</h2>
                        <h3>DevSuperior - Escola de programação</h3>
                    </div>
                    <div className="dflex">
                        <Link to="/form-page">
                            <StartButton text="Começar" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}