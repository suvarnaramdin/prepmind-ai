function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 min-h-screen p-6 border-r border-gray-800">
      
      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        PrepMind
      </h1>

      <ul className="space-y-6 text-gray-300">

        <li className="hover:text-white cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-white cursor-pointer">
          Interviews
        </li>

        <li className="hover:text-white cursor-pointer">
          Analytics
        </li>

        <li className="hover:text-white cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  )
}

export default Sidebar