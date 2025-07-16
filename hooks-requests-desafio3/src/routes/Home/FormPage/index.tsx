






import { useState } from "react";
import "./styles.css";

type FormData = {
    userName: string;
}

export default function FormPage() {
    
    const [formData, setFormData] = useState<FormData>({
        userName: ""
    });

    function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value});
    }

    function handleFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Nome digitado no input: ", formData.userName);
    }

    return(
        <main className="bg-color-form-page">
            <section id="form-page-section">
                <form onSubmit={handleFormSubmit}>
                    <h2 className="form-page-title mb">Encontre um perfil Github</h2>
                    <div>
                        <input
                            name="userName"
                            value={formData.userName}
                            type="text"
                            placeholder="Usuário Github"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="buttons"
                        >
                            Encontrar
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}

