function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-gray-950 text-white">
      
      <h1 className="text-2xl font-bold text-blue-500">
        PrepMind AI
      </h1>

      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
        Login
      </button>

    </nav>
  )
}

export default Navbar