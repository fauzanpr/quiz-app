import { QuestType } from "./quiz";
import { RESPONSE_CODE_TYPE } from "./response"

export type ApiResponse = {
    response_code: RESPONSE_CODE_TYPE,
    response_message?: string,
    token?: string,
    results?: QuestType[]
}

export type LoginType = {
    email: string;
    password: string;
}