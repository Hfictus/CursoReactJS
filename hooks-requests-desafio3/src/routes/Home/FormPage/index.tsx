




import { useEffect, useState } from "react";
import "./styles.css";
import * as userDataService from "../../../services/user-data-service";
import type { UserDataDTO } from "../../../models/user-data";
import UserDataCard from "../../../components/UserDataCard";
import UserSearchError from "../../../components/UserSearchError";


type FormData = {
    firstName: string;
}

export default function FormPage() {
        
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    
    const [hasError, setHasError] = useState<boolean>(false);

    const [userLog, setUserLog] = useState<string>();
    
    const [formData, setFormData] = useState<FormData>({
        firstName: ""
    });
    
    const [userData, setUserData] = useState<UserDataDTO>();


    useEffect(() => {
        if(userLog) {
            userDataService.findByLogin(userLog)
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
                setHasError(false);
            })
            .catch(error => {
                console.log("Status: ", error.response.data.status);
                setUserData(undefined);
                setHasError(true);
            })
        }
    }, [userLog]);


    function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value});
    }

    function handleFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setUserLog(formData.firstName);
        setHasSearched(true);

        console.log("Nome digitado no input: ", formData.firstName);
    }

    return(
        <main className="bg-color-form-page">
            <section id="form-page-section">
                <form onSubmit={handleFormSubmit}>
                    <h2 className="form-page-title pb">Encontre um perfil Github</h2>
                    <div>
                        <input
                            name="firstName"
                            value={formData.firstName}
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
                {   
                        hasSearched && (
                            userData 
                            ? <UserDataCard key={userData.login} userDataCard={userData} />
                            : <UserSearchError />
                        )
                    }
            </section>
        </main>
    );
}

