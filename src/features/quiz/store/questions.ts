import { atom } from "jotai";

export interface IQuestions {
    no: number;
    question: string;
    correct_answer: string;
    status: boolean;
    answer?: string;
}

export const questionsListAtom = atom<IQuestions[]>();