import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-purple-950 to-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-8 text-center">
          Axiom Balance
        </h1>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Welcome to Axiom Balance
          </h2>
          <p className="text-indigo-200 mb-4">
            Your personal finance management platform that helps you track expenses, manage budgets, and achieve your financial goals.
          </p>
          <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
            <div className="text-white">
              <p className="font-semibold">Current Balance</p>
              <p className="text-2xl font-bold text-indigo-400">$10,000.00</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App