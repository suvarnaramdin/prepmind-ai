import Sidebar from "../components/Sidebar"
import InterviewCard from "../components/InterviewCard"

function Dashboard() {
  return (
    <div className="flex bg-gray-950 min-h-screen text-white">
      
      <Sidebar />

      <div className="flex-1 p-10">
        
        <h1 className="text-4xl font-bold mb-10">
          Interview Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <InterviewCard
            title="Frontend Interview"
            level="Intermediate"
          />

          <InterviewCard
            title="DBMS Interview"
            level="Advanced"
          />

          <InterviewCard
            title="HR Interview"
            level="Beginner"
          />

        </div>

      </div>

    </div>
  )
}

export default Dashboard