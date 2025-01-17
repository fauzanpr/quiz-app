import Timer from "../../_global/components/Timer"
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { questionsListAtom } from "../store/questions";
import { calculateFilled } from "../utils/calculateAnswer";
import { DialogConfirmation } from "@/features/quiz/components/DialogConfirmation";
import { useState } from "react";

function Quiz() {
  const { id } = useParams();
  const [questionsList, setQuestionsListAtom] = useAtom(questionsListAtom);
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const changeNumHandler = (num: number) => {
    navigate(`/quiz/${num}`);
  };

  const submitHandler = () => {
    setIsDialogOpen(true);
  }

  const answerHandler = (no: number, ans: string) => {
    setQuestionsListAtom((prevQuestions = []) =>
      prevQuestions.map(question =>
        question.no === no ? { ...question, answer: ans } : question
      )
    );
    if (questionsList) {
      if (Number(id) < questionsList?.length) {
        localStorage.setItem("ans", JSON.stringify(questionsList));
        navigate(`/quiz/${Number(id) + 1}`)
      }
    }
  };

  // will check resume quiz
  if (localStorage.getItem("previous-quiz")) {
    return <></>
  }

  return (
    <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4">
      <DialogConfirmation isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      <Timer />
      {/* for displaying number navigation */}
      <div className="grid grid-cols-10 gap-4 mt-8">
        {questionsList?.map((_q, i) => i + 1).map(num => <button className={`rounded-lg ${questionsList[num - 1].no === Number(id) ? "bg-blue-300" : questionsList[num - 1]?.answer ? "bg-green-300" : "bg-gray-200"}`} onClick={() => changeNumHandler(num)}>{num}</button>)}
      </div>
      <p>Terjawab: {calculateFilled(questionsList || [])} dari {questionsList?.length}</p>

      {/* for displaying quiz */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-medium underline">Soal {Number(id)}/{questionsList?.length}</p>
          {questionsList && <p dangerouslySetInnerHTML={{ __html: questionsList[Number(id) - 1]?.question }} className="text-lg" />}
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" checked={questionsList && questionsList[Number(id) - 1].answer === "True" ? true : false} name="ans" className="size-4 cursor-pointer" onClick={() => answerHandler(Number(id), "True")} />
          <p>True</p>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" name="ans" checked={questionsList && questionsList[Number(id) - 1].answer === "False" ? true : false} className="size-4 cursor-pointer" onClick={() => answerHandler(Number(id), "False")} />
          <p>False</p>
        </div>
        {Number(id) === questionsList?.length ? <button className="bg-blue-600 text-white p-2 hover:bg-blue-700" onClick={submitHandler}>Submit</button> : null}
      </div>
    </div>
  )
}

export default Quiz;