




import { useContext, useState } from "react";
import "./styles.css";
import * as authService from "../../../services/auth-service"
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import { LoginFormDTO } from "../../../models/login-form";
import { AdminFormDTO } from "../../../models/admin-form";


export default function Login() {
    

    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginFormDTO>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Emails",
            autoComplete: "username",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido"
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
            autoComplete: "current-password"
        } 
    });

    const { setContextTokenPayload } = useContext(ContextToken);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        authService.loginRequest(
                forms.toValues(formData)
            )
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(error => {
                console.log("Erro no login", error);
            });
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(
            forms.updateAndValidate(
                formData,
                event.target.name as keyof AdminFormDTO,
                event.target.value
            )
        );
    }
        
    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }
    
    return(
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    { ...formData.username }
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <FormInput
                                    { ...formData.password }
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}