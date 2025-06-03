import React from 'react';

const HeroComponent = () => {
  const candidates = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      avatarGradient: "from-blue-400 to-purple-500",
      status: "92% JOIN",
      statusColor: "bg-green-500",
      progressColor: "bg-green-400",
      progressWidth: "92%"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      avatarGradient: "from-red-400 to-orange-500",
      status: "65% RISK",
      statusColor: "bg-red-500",
      progressColor: "bg-red-400",
      progressWidth: "65%"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      avatarGradient: "from-green-400 to-teal-500",
      status: "88% JOIN",
      statusColor: "bg-green-500",
      progressColor: "bg-green-400",
      progressWidth: "88%"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-blue-50 px-6 border py-20 flex items-center justify-center">
      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="">
            <span className='bg-[#d7ffec] text-[#652d96] font-normal px-3 py-1 rounded-full text-sm'>AI-Powered Candidate Conversion</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Stop Losing{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Candidates
            </span>{' '}
            After the Offer
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Predict who'll join with 87% accuracy. Eliminate ghosting. Close candidates faster with AI-powered insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#3affa0] text-black px-8 py-4 rounded-full font-semibold text-md  transition-all duration-200 transform">
              Book a Demo
            </button>
            <button className="border-2 border-[#652d96] text-[#652d96] px-8 py-4 rounded-full font-semibold text-lg  transition-all duration-200">
              Try Free
            </button>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {['bg-[#652d96]','bg-[#652d96]','bg-[#652d96]'].map((color, i) => (
                  <div key={i} className={`size-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['JD', 'KL', 'MN'][i]}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full flex items-center justify-center">
                    <span className="text-[#3affa0] text-lg">★</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">Trusted by 500+ hiring teams</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl animate-custom-bounce transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Candidate Predictions</h3>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">LIVE</span>
            </div>

            <div className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${candidate.avatarGradient} rounded-full shadow-lg`}></div>
                      <div>
                        <div className="text-white font-semibold">{candidate.name}</div>
                        <div className="text-gray-400 text-sm">{candidate.role}</div>
                      </div>
                    </div>
                    <div className={`${candidate.statusColor} text-white text-sm px-3 py-1 rounded-full font-bold shadow-sm`}>
                      {candidate.status}
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${candidate.progressColor} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: candidate.progressWidth }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center text-gray-400 text-sm">
              <span>Updated 2 minutes ago</span>
              <button className="text-green-400 hover:text-green-300 font-medium">View All</button>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100 transform transition-transform duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">87%</div>
            <div className="text-sm text-gray-500 font-medium">Prediction Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;