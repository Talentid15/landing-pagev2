'use client';

const MainPage = () => {
   const candidates = [
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      avatarGradient: "from-blue-500 to-purple-500",
      status: "91% JOIN",
      statusColor: "bg-green-500"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatarGradient: "from-red-500 to-orange-500",
      status: "15% RISK",
      statusColor: "bg-red-500"
    },
    {
      name: "Priya Sharma",
      role: "UX Analyst",
      avatarGradient: "from-green-500 to-teal-500",
      status: "93% JOIN",
      statusColor: "bg-green-500"
    }
  ];

  return (
    <section className="mx-auto px-10  min-h-[80vh] py-20 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center border border-red-500">
        <div className="space-y-8">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            AI-Powered Candidate Conversion
          </div>
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
            Stop Losing{' '}
            <span className="text-[#652d96]">
              Candidates
            </span>{' '}
            After the Offer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Predict who'll join with 87% accuracy. Eliminate ghosting. Close candidates faster with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
              Book a Demo
            </button>
            <button className="border-2 border-[#652d96] text-[#652d96] px-8 py-3 rounded-lg font-semibold text-lg">
              Try Free
            </button>
          </div>
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.9/5</span>
            </div>
            <span className="text-sm text-gray-500">Trusted by 500+ hiring teams</span>
          </div>
        </div>
        {/* Dashboard */}
        <div className="relative">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">TalentApp Dashboard</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold">Candidate Predictions</h3>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
            </div>
            <essential className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${candidate.avatarGradient} rounded-full`}></div>
                    <div>
                      <div className="text-white font-medium">{candidate.name}</div>
                      <div className="text-gray-400 text-sm">{candidate.role}</div>
                    </div>
                  </div>
                  <div className={`${candidate.statusColor} text-white text-sm px-3 py-1 rounded-full font-medium`}>
                    {candidate.status}
                  </div>
                </div>
              ))}
            </essential>
            <div className="mt-6 text-gray-400 text-sm">
              Updated 5 minutes ago
              <span className="float-right">View All</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-bold text-gray-800">87%</div>
            <div className="text-sm text-gray-500">Prediction Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
