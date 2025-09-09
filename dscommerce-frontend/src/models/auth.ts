





export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type CredentialsDTO = {
    username: string;
    password: string;
}

//incluí nbf abaixo *******
export type AccessTokenPayloadDTO = {
    nbf: number;
    exp: number;
    username: string;
    authorities: RoleEnum[];
}
//o professor usou user_name. No meu PAYLOAD aparece username