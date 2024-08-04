import { useEffect } from "react";
import Timer from "../../_global/components/Timer"
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { questionsListAtom } from "../store/questions";
import { calculateAnswer } from "../utils/calculateAnswer";

function Quiz() {
  const { id } = useParams();
  const [questionsList, setQuestionsListAtom] = useAtom(questionsListAtom);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(questionsList);
  }, [questionsList]);

  const changeNumHandler = (num: number) => {
    navigate(`/quiz/${num}`);
  };

  const submitHandler = () => {
    const result = calculateAnswer(questionsList || []);
    alert(result);
  }

  const answerHandler = (no: number, ans: string) => {
    setQuestionsListAtom((prevQuestions = []) =>
      prevQuestions.map(question =>
        question.no === no ? { ...question, answer: ans } : question
      )
    );
  };

  // will check resume quiz
  if (localStorage.getItem("previous-quiz")) {
    return <></>
  }

  return (
    <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4">
      <Timer />

      {/* for displaying number navigation */}
      <div className="grid grid-cols-10 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <button className="bg-gray-200 rounded-lg" onClick={() => changeNumHandler(num)}>{num}</button>)}
      </div>

      {/* for displaying quiz */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-medium underline">Soal {Number(id)}/10</p>
          {questionsList && <p dangerouslySetInnerHTML={{ __html: questionsList[Number(id) - 1]?.question }} className="text-lg" />}
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" checked={questionsList && questionsList[Number(id)-1].answer === "True" ? true : false} name="ans" className="size-4 cursor-pointer" onClick={() => answerHandler(Number(id), "True")} />
          <p>True</p>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" name="ans" checked={questionsList && questionsList[Number(id)-1].answer === "False" ? true : false} className="size-4 cursor-pointer" onClick={() => answerHandler(Number(id), "False")} />
          <p>False</p>
        </div>
        { Number(id) === 10 ? <button className="bg-blue-600 text-white p-2 hover:bg-blue-700" onClick={submitHandler}>Submit</button> : null }
      </div>
    </div>
  )
}

export default Quiz;