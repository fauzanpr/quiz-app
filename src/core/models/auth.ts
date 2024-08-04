import { RESPONSE_CODE_TYPE } from "./response"

export type TokenResponse = {
    response_code: RESPONSE_CODE_TYPE,
    response_message: string,
    token: string
}

export type LoginType = {
    email: string;
    password: string;
}