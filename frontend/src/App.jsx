function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">
          PrepMind AI
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">
          Crack Interviews with
          <span className="text-blue-500"> AI-Powered </span>
          Mock Practice
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl">
          Practice technical and HR interviews using AI.
          Get instant feedback, confidence analysis, and
          personalized improvement suggestions.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl text-lg transition">
            Start Interview
          </button>

          <button className="border border-gray-700 hover:border-gray-500 px-7 py-3 rounded-xl text-lg transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">
        
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            AI Interviewer
          </h2>

          <p className="text-gray-400">
            Simulate real technical and HR interviews using AI-generated questions.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            Instant Feedback
          </h2>

          <p className="text-gray-400">
            Receive detailed analysis on communication, confidence, and answers.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            Progress Tracking
          </h2>

          <p className="text-gray-400">
            Monitor your interview performance and improve over time.
          </p>
        </div>
      </section>

    </div>
  )
}

export default App