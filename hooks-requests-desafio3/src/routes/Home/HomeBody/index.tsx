




import StartButton from "../../../components/StartButton";
import "./styles.css";

export default function HomeBody() {
    return(
        <main>
            <section id="page-home-section">
                <div className="rhd-container">
                    <div className="start-page-titles">
                        <h2>Desafio Github API</h2>
                        <h3>DevSuperior - Escola de programação</h3>
                    </div>
                    <div>
                        <StartButton text="Começar" />
                    </div>
                </div>
            </section>
        </main>
    );
}