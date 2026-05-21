import { Link } from "react-router-dom"

function InterviewCard({ title, level, questions }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">

      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-400 mb-2">
        Difficulty: {level}
      </p>

      <p className="text-gray-500 mb-6">
        {questions} AI Questions
      </p>

      <Link to="/interview">
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg w-full">
          Start Interview
        </button>
      </Link>

    </div>
  )
}

export default InterviewCard