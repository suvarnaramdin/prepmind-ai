import Sidebar from "../components/Sidebar"
import InterviewCard from "../components/InterviewCard"

function Dashboard() {
  return (
    <div className="flex bg-gray-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mb-10">
          Practice interviews and improve your confidence with AI.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 mb-2">
              Interviews Completed
            </h2>

            <p className="text-4xl font-bold text-blue-500">
              12
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 mb-2">
              Average Score
            </h2>

            <p className="text-4xl font-bold text-green-500">
              84%
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 mb-2">
              AI Confidence Level
            </h2>

            <p className="text-4xl font-bold text-purple-500">
              High
            </p>
          </div>

        </div>

        {/* Interview Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <InterviewCard
            title="Frontend Interview"
            level="Intermediate"
            questions="15"
          />

          <InterviewCard
            title="DBMS Interview"
            level="Advanced"
            questions="20"
          />

          <InterviewCard
            title="HR Interview"
            level="Beginner"
            questions="10"
          />

        </div>

      </div>

    </div>
  )
}

export default Dashboard