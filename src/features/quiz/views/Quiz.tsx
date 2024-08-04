import { useEffect } from "react";
import Timer from "../../_global/components/Timer"
import { questionsList } from "../utils/question";

function Quiz() {
  useEffect(() => {
    console.log(questionsList);
  }, []);
  
  // will check resume quiz
  if (localStorage.getItem("previous-quiz")) {
    return <></>
  }

  return (
    <div className="bg-gray-50 w-1/3 mx-auto my-4 p-4 flex flex-col gap-4">
      <Timer />

      {/* for displaying number navigation */}
      <div className="grid grid-cols-10 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <button className="bg-gray-200 rounded-lg">{num}</button>)}
        <button className="bg-green-300 rounded-lg">{11}</button>
        <button className="bg-white rounded-lg">{12}</button>
      </div>

      {/* for displaying quiz */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-medium underline">Soal 1/10</p>
          <p className="text-lg">{questionsList[0]?.question}</p>
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