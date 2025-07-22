



import type { UserDataDTO } from "../../models/user-data";
import "./styles.css";


type Props = {
    userDataCard: UserDataDTO;
}

export default function UserDataCard({ userDataCard } : Props) {
    return(
        <div className="dflex user-data-container">
            <div>
                <img src={userDataCard.avatar_url} alt={"User image"} />
            </div>
            <div className="user-data-text">
                <h3>Informações</h3>
                <h4><span>Perfil:</span> {userDataCard.url}</h4>
                <h4><span>Seguidores:</span> {userDataCard.followers}</h4>
                <h4><span>Localidade:</span> {userDataCard.location}</h4>
                <h4><span>Nome:</span> {userDataCard.name}</h4>
            </div>
        </div>
    );
}