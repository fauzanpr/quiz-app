import { useAtom, useSetAtom } from "jotai"
import { questionsListAtom } from "../store/questions";
import { calculateAnswer, calculateFalseAnswer, calculateFilled } from "../utils/calculateAnswer";
import { useNavigate } from "react-router-dom";
import { reqAtom } from "../store/enable";
import { timerAtom } from "../../_global/store/timer";

function EndQuiz() {
  const [questionsList, setQuestionsListAtom] = useAtom(questionsListAtom);
  const setReq = useSetAtom(reqAtom);
  const setTimer = useSetAtom(timerAtom);
  const navigate = useNavigate();
  const backMenuHandler = () => {
    setReq(false);
    setQuestionsListAtom([]);
    setTimer(10);
    localStorage.removeItem("ans");
    localStorage.removeItem("timer");
    navigate("/app");
  };
  return (
    <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4">
      <p>Quiz selesai, terimakasih telah mengikuti quiz dengan baik</p>
      <div className="bg-white border p-4 rounded-lg">
        <p>Total soal: {questionsList?.length}</p>
        <p>Soal terjawab: {calculateFilled(questionsList || [])}</p>
        <p>Jumlah Jawaban Benar: {calculateAnswer(questionsList || [])}</p>
        <p>Jumlah Jawaban Salah: {calculateFalseAnswer(questionsList || [])}</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2" onClick={backMenuHandler}>Kembali ke menu</button>
    </div>
  )
}

export default EndQuiz