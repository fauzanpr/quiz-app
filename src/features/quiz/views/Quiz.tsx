import Timer from "../../_global/components/Timer"

function Quiz() {
  // will check resume quiz
  if (localStorage.getItem("previous-quiz")) {
    return <></>
  }

  return (
    <div>
      <Timer />
    </div>
  )
}

export default Quiz;