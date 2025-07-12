




import UserSearchBar from "../../../components/UserSearchBar";
import UserSearchButton from "../../../components/UserSearchButton";
import "./styles.css";

export default function FormPage() {
    return(
        <main className="bg-color-form-page">
            <section id="form-page-section">
                <form>
                    <h2>Encontre um perfil Github</h2>
                    <UserSearchBar />
                    <UserSearchButton />
                </form>
            </section>
        </main>
    );
}