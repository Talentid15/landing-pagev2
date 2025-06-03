import React from 'react';

const ProcessStep = ({ stepNumber, title, description, children, stepColor }) => {
  return (
    <div className="relative">
      <div className={`absolute -top-4 left-6 w-8 h-8 ${stepColor} rounded-full flex items-center justify-center text-white font-bold text-sm z-10`}>
        {stepNumber}
      </div>

      <div className={`bg-white rounded-2xl ${Number(stepNumber) === 2 ? 'p-[3.0rem]' : 'p-8'} shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 pt-12`}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        {children}
      </div>
    </div>
  );
};

const PlatformTag = ({ children }) => {
  return (
    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  );
};

const FeatureItem = ({ children }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      <span className="text-gray-700 text-sm">{children}</span>
    </div>
  );
};

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-4 bg-gray-50 p-3 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 text-sm font-medium">{label}</span>
        <span className="text-[#652d96] font-bold text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-[#652d96] h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const HowTalentIdWorks = () => {
  return (
    <div className="min-h-screen bg-[#edf2f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-10">
            <span className="bg-[#d7ffec] text-[#652d96] font-normal px-3 py-1 rounded-full text-sm">
            Simple Process
          </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How TalentId.app <span className="text-[#652d96]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform integrates seamlessly with your existing workflow to provide predictive insights and boost candidate conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProcessStep
            stepNumber="1"
            stepColor="bg-[#38ff9f]"
            title="Connect Your ATS"
            description="Integrate with your existing Applicant Tracking System in minutes. We support all major platforms."
          >
            <div className="space-y-2">
              <PlatformTag>Greenhouse</PlatformTag>
              <PlatformTag>Lever</PlatformTag>
              <PlatformTag>Workday</PlatformTag>
              <PlatformTag>+30 more</PlatformTag>
            </div>
          </ProcessStep>

          <ProcessStep
            stepNumber="2"
            stepColor="bg-[#38ff9f]"
            title="Send Smart Offers"
            description="Create and send personalized offer letters through our platform. Track opens, views, and engagement in real-time."
          >
            <div className="space-y-2">
              <FeatureItem>Instant delivery</FeatureItem>
              <FeatureItem>Real-time tracking</FeatureItem>
            </div>
          </ProcessStep>

          <ProcessStep
            stepNumber="3"
            stepColor="bg-[#38ff9f]"
            title="Get Predictive Insights"
            description="Our AI analyzes candidate behavior and provides joining probability scores and ghosting alerts."
          >
            <div className="mt-4">
              <ProgressBar label="Joining Probability" percentage={87} />
            </div>
          </ProcessStep>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#38ff9f] rounded-full flex items-center justify-center text-white z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center pt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Close More Candidates</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Use our insights to take proactive action, engage at-risk candidates, and dramatically increase your offer acceptance rates.
              </p>
              <button className="bg-[#38ff9f] text-black/90 px-6 py-2 rounded-full font-semibold text-sm  transition-colors">
                See It In Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTalentIdWorks;