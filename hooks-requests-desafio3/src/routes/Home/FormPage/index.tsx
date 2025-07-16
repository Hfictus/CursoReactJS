






import { useState, type ChangeEvent } from "react";
import UserSearchBar from "../../../components/UserSearchBar";
import UserSearchButton from "../../../components/UserSearchButton";
import "./styles.css";

type FormData = {
    userName: string;
}

export default function FormPage() {
    
    const [formData, setFormData] = useState<FormData>({
        userName: ""
    });
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }
    
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("handleFormSubmit");
        console.log("Form data:", formData);
    }
    
    return(
        <main className="bg-color-form-page">
            <section id="form-page-section">
                <form onSubmit={handleFormSubmit}>
                    <h2 className="form-page-title mb">Encontre um perfil Github</h2>
                    <UserSearchBar 
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        placeholder="Usuário Github"
                    />
                    <UserSearchButton />
                </form>
            </section>
        </main>
    );
}

