import { useState } from "react"

function Interview() {

  const questions = [
    "Explain the difference between SQL and NoSQL databases.",
    "What is React and why is it used?",
    "Explain normalization in DBMS.",
    "What are API endpoints?",
    "Difference between authentication and authorization?"
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswer("")
      setSubmitted(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            AI Mock Interview
          </h1>

          <p className="text-gray-400 mt-2">
            Practice with AI-generated interview questions
          </p>
        </div>

        <div className="bg-gray-900 px-6 py-3 rounded-xl border border-gray-800">
          ⏱ 15:00
        </div>

      </div>

      {/* Progress */}
      <div className="mb-8">

        <div className="flex justify-between mb-2">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>

          <span>
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>

        <div className="w-full bg-gray-800 h-3 rounded-full">
          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

      </div>

      {/* Question Card */}
      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">

        <h2 className="text-2xl font-semibold mb-6">
          {questions[currentQuestion]}
        </h2>

        <textarea
          className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white outline-none"
          rows="8"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <div className="flex gap-4 mt-6">

          <button
            onClick={() => setSubmitted(true)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Submit Answer
          </button>

          <button
            onClick={handleNext}
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl"
          >
            Next Question
          </button>

        </div>

      </div>

      {/* AI Feedback */}
      {submitted && (
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mt-8">

          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            AI Feedback
          </h2>

          <p className="text-gray-300 mb-4">
            Good explanation. Your answer is technically correct,
            but you can improve by adding real-world examples.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="text-gray-400 mb-2">
                Confidence
              </h3>

              <p className="text-2xl font-bold text-green-500">
                82%
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="text-gray-400 mb-2">
                Technical Accuracy
              </h3>

              <p className="text-2xl font-bold text-blue-500">
                88%
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <h3 className="text-gray-400 mb-2">
                Communication
              </h3>

              <p className="text-2xl font-bold text-purple-500">
                79%
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Interview