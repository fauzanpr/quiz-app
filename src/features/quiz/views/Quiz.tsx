import { useEffect } from "react";
import Timer from "../../_global/components/Timer"
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { questionsListAtom } from "../store/questions";

function Quiz() {
  const { id } = useParams();
  const [questionsList] = useAtom(questionsListAtom);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(questionsList);
  }, [questionsList]);

  const changeNumHandler = (num: number) => {
    navigate(`/quiz/${num}`);
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
          { questionsList && <p dangerouslySetInnerHTML={{__html: questionsList[Number(id)-1]?.question}} className="text-lg" /> }
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" name="ans" className="size-4" />
          <p>True</p>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <input type="radio" name="ans" className="size-4 cursor-pointer" />
          <p>False</p>
        </div>
      </div>
    </div>
  )
}

export default Quiz;