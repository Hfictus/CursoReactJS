


import axios from "axios";
import { BASE_URL } from "../utils/system";



export function findByLogin(login : string | undefined) {
    return axios.get(`${BASE_URL}/users/${login}`);
}