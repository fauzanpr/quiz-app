import { useAtom, useSetAtom } from "jotai";
import { reqAtom } from "../store/enable";
import useGetQuest from "../hooks/useGetQuest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { questionsListAtom } from "../store/questions";
import toast from "react-hot-toast";
import { timerAtom } from "../../_global/store/timer";
import { amountAtom } from "../store/params";

function LandingQuiz() {
    const setReqAtom = useSetAtom(reqAtom);
    const [timer, setTimerAtom] = useAtom(timerAtom);
    const [amount, setAmountAtom] = useAtom(amountAtom);
    const [questionsList, setQuestionsListAtom] = useAtom(questionsListAtom);
    const navigate = useNavigate();
    const { questions, isLoading, isSuccess, response } = useGetQuest();
    const startButtonHandler = () => {
        setReqAtom(true);
    }

    const continueButtonHandler = () => {
        setQuestionsListAtom(JSON.parse(localStorage.getItem("ans") || ""));
        if (questionsList) {
            setTimerAtom(Number(localStorage.getItem("timer")) || timer);
            navigate("/quiz/1");
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    useEffect(() => {
        setQuestionsListAtom([]);
        if (response === 0) {
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
        } else if (response === 4) {
            localStorage.removeItem("token");
            toast.error("Session telah berakhir, silakan login ulang");
            navigate("/");
        }
    }, [isSuccess, navigate, questions, response, setQuestionsListAtom, setReqAtom]);

    return (
        <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4 text-center">
            <p>Bersedia mulai kuis?</p>
            <div>
                <p>Inputkan waktu (dalam detik)</p>
                <input type="number" value={timer} onChange={e => setTimerAtom(Number(e.target.value))} className="border p-2" />
            </div>
            <div>
                <p>Inputkan Jumlah soal</p>
                <input type="number" value={amount} onChange={e => setAmountAtom(Number(e.target.value))} className="border p-2" />
            </div>
            <button className="bg-blue-700 text-white w-fit px-8 py-2 rounded-lg mx-auto" onClick={startButtonHandler}>{isLoading ? "Memuat soal..." : "Mulai"}</button>
            {localStorage.getItem("ans") ? <button className="bg-green-700 text-white w-fit px-8 py-2 rounded-lg mx-auto" onClick={continueButtonHandler}>Lanjut Kuis Sebelumnya</button> : null}

            <p className="hover:underline cursor-pointer text-red-800 w-fit mx-auto" onClick={logoutHandler}>Logout</p>
        </div>
    )
}

export default LandingQuiz;