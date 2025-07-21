



import type { UserDataDTO } from "../../models/user-data";

type Props = {
    userDataCard: UserDataDTO;
}

export default function UserDataCard({ userDataCard } : Props) {
    return(
        <div className="dflex">
            <div>
                <img src={userDataCard.avatar_url} alt={"User image"} />
            </div>
            <div>
                <h3>Informações</h3>
                <h4>Perfil: {userDataCard.url}</h4>
                <h4>Seguidores: {userDataCard.followers}</h4>
                <h4>Localidade: {userDataCard.location}</h4>
                <h4>Nome: {userDataCard.name}</h4>
            </div>
        </div>
    );
}