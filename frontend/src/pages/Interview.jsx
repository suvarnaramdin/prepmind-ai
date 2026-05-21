import { Link } from "react-router-dom"
function Interview() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      
      <h1 className="text-4xl font-bold mb-8">
        AI Mock Interview
      </h1>

      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
        
        <h2 className="text-2xl font-semibold mb-4">
          Question 1
        </h2>

        <p className="text-gray-300 text-lg">
          Explain the difference between SQL and NoSQL databases.
        </p>

        <textarea
          className="w-full mt-6 bg-gray-800 border border-gray-700 rounded-xl p-4 text-white outline-none"
          rows="6"
          placeholder="Type your answer here..."
        ></textarea>

        <Link to="/interview">
  <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
    Start
  </button>
</Link>

      </div>

    </div>
  )
}

export default Interview