export interface IQuestions {
    no: number;
    question: string;
    correct_answer: string;
    status: boolean;
}

export const questionsList: IQuestions[] = [];