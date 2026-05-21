function InterviewCard({ title, level }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
      
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-gray-400 mb-6">
        Difficulty: {level}
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
        Start
      </button>

    </div>
  )
}

export default InterviewCard