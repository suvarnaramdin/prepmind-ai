import { useEffect, useState } from "react"

function Interview() {

  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState(null)

  const [scores, setScores] = useState([])

  // Resume Upload States
  const [resume, setResume] = useState(null)
  const [resumeText, setResumeText] = useState("")

  useEffect(() => {
    fetchQuestions()
  }, [])

  // Fetch Questions
  const fetchQuestions = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/questions"
      )

      const data = await response.json()

      setQuestions(data.questions)

    } catch (error) {

      console.log(error)

    }
  }

  // Resume Upload
  const handleResumeUpload = async () => {

    if (!resume) {
      alert("Please select a PDF file")
      return
    }

    const formData = new FormData()

    formData.append("resume", resume)

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/upload-resume",
        {
          method: "POST",
          body: formData
        }
      )

      const data = await response.json()

      console.log(data)

      if (data.error) {
        alert(data.error)
        return
      }

      alert("Resume uploaded successfully")

      setResumeText(data.resume_text)

      if (data.questions) {
        setQuestions(data.questions)
        setCurrentQuestion(0)
      }

    } catch (error) {

      console.log(error)

      alert("Upload failed")

    }
  }

  // Submit Answer
  const handleSubmit = async () => {

    setLoading(true)

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/evaluate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            question: questions[currentQuestion],
            answer
          })
        }
      )

      const data = await response.json()

      setResult(data)

      setScores([...scores, data.score])

    } catch (error) {

      console.log(error)

    }

    setLoading(false)
  }

  // Next Question
  const nextQuestion = () => {

    setResult(null)
    setAnswer("")

    setCurrentQuestion(currentQuestion + 1)
  }

  // Average Score
  const averageScore =
    scores.length > 0
      ? Math.round(
          scores.reduce((a, b) => a + b, 0) / scores.length
        )
      : 0

  // Interview Complete Screen
  if (
    questions.length > 0 &&
    currentQuestion >= questions.length
  ) {

    return (

      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

        <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800 text-center w-[600px]">

          <h1 className="text-5xl font-bold mb-6">
            Interview Complete 🎉
          </h1>

          <p className="text-gray-400 mb-8">
            Great job completing your AI mock interview.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">

            <h2 className="text-2xl mb-4">
              Final Average Score
            </h2>

            <p className="text-7xl font-bold">
              {averageScore}/100
            </p>

          </div>

        </div>

      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            PrepMind AI Interview
          </h1>

          <p className="text-gray-400 mt-2">
            AI-powered interview practice platform
          </p>

        </div>

        <div className="bg-gray-900 px-6 py-3 rounded-xl border border-gray-800">
          Question {currentQuestion + 1} / {questions.length}
        </div>

      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-3 rounded-full mb-10">

        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{
            width:
              questions.length > 0
                ? `${((currentQuestion + 1) / questions.length) * 100}%`
                : "0%"
          }}
        ></div>

      </div>

      {/* Resume Upload */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Upload Resume
        </h2>

        <input
  type="file"
  accept="application/pdf"
  onChange={(e) => {

    const file = e.target.files[0]

    console.log(file)

    setResume(file)
  }}
  className="block w-full text-white bg-gray-800 p-4 rounded-xl border border-gray-700 mb-4"
/>
        <br />

        <button
          onClick={handleResumeUpload}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Upload Resume
        </button>

        {resumeText && (

          <div className="mt-6 bg-gray-800 p-4 rounded-xl">

            <h3 className="text-xl font-bold mb-3">
              Extracted Resume Text
            </h3>

            <p className="text-gray-300 whitespace-pre-wrap">
              {resumeText}
            </p>

          </div>

        )}

      </div>

      {/* Question Card */}
      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-6">

          {questions[currentQuestion] || "Loading..."}

        </h2>

        <textarea
          rows="8"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 outline-none"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl mt-6"
        >
          {loading ? "Evaluating..." : "Submit Answer"}
        </button>

      </div>

      {/* Results */}
      {result && (

        <div className="mt-10">

          {/* Score */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl mb-8">

            <h2 className="text-2xl font-bold mb-2">
              AI Interview Score
            </h2>

            <p className="text-6xl font-bold">
              {result.score}/100
            </p>

          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Strengths */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

              <h3 className="text-xl font-bold text-green-400 mb-4">
                Strengths
              </h3>

              <ul className="space-y-2">

                {result.strengths.map((item, index) => (
                  <li key={index}>
                    ✅ {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Weaknesses */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

              <h3 className="text-xl font-bold text-red-400 mb-4">
                Weaknesses
              </h3>

              <ul className="space-y-2">

                {result.weaknesses.map((item, index) => (
                  <li key={index}>
                    ❌ {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* Tips */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 mt-6">

            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Improvement Tips
            </h3>

            <ul className="space-y-2">

              {result.tips.map((item, index) => (
                <li key={index}>
                  ⭐ {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Ideal Answer */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 mt-6">

            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Ideal Answer
            </h3>

            <p className="text-gray-300">
              {result.ideal_answer}
            </p>

          </div>

          {/* Next Question */}
          <button
            onClick={nextQuestion}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl mt-6"
          >
            Next Question →
          </button>

        </div>

      )}

    </div>
  )
}

export default Interview