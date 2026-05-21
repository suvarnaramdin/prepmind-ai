import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      <div className="flex flex-col items-center justify-center text-center px-6 py-28">
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">
          Crack Interviews with
          <span className="text-blue-500"> AI-Powered </span>
          Practice
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl">
          Practice technical and HR interviews with AI-generated questions
          and instant feedback analysis.
        </p>

       <Link to="/dashboard">
  <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl text-lg transition mt-8">
    Start Interview
  </button>
</Link>
      </div>

    </div>
  )
}

export default Home