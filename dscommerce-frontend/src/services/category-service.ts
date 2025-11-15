


import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findAllRequest() {
    const conifig: AxiosRequestConfig = {
        method: "GET",
        url: "/categories"
    }
    return requestBackend(conifig);
}