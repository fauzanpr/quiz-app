import { useAtom, useSetAtom } from "jotai";
import { reqAtom } from "../store/enable";
import useGetQuest from "../hooks/useGetQuest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { questionsListAtom } from "../store/questions";

function LandingQuiz() {
    const setReqAtom = useSetAtom(reqAtom);
    const [questionsList, setQuestionsListAtom] = useAtom(questionsListAtom);
    const navigate = useNavigate();
    const { questions, isLoading, isSuccess } = useGetQuest();
    const startButtonHandler = () => {
        setReqAtom(true);
    }

    useEffect(() => {
        setQuestionsListAtom([]);
        if (isSuccess && reqAtom) {
            setQuestionsListAtom(questions?.map((question, i) => {
                return {
                    no: i + 1,
                    question: question.question,
                    correct_answer: question.correct_answer,
                    status: false
                }
            }));
            setReqAtom(false);
            if (questionsList) {
                navigate("/quiz/1");
            }
        }
    }, [isSuccess, navigate, questions, questionsList, setQuestionsListAtom, setReqAtom])
    return (
        <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4 text-center">
            <p>Bersedia mulai kuis?</p>
            <button className="bg-blue-700 text-white w-fit px-8 py-2 rounded-lg mx-auto" onClick={startButtonHandler}>{isLoading ? "Memuat soal..." : "Mulai"}</button>
        </div>
    )
}

export default LandingQuiz;