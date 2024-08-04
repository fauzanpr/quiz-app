import { IQuestions } from "../store/questions";

export const calculateAnswer = (questions: IQuestions[]) => {
    let count = 0;
    questions.forEach(question => {
        if (question.answer === question.correct_answer) {
            count += 1;
        }
    });

    return count;
}