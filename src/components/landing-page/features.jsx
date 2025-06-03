import React from 'react';

const FeatureCard = ({ icon, title, description, blurColor }) => {
  return (
    <div className="relative group">
      <div className={`absolute -top-8 -left-8 w-32 h-32 ${blurColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
        <button className="text-[#652d96] text-sm font-semibold transition-colors">
          Learn more about this analytics →
        </button>
      </div>
    </div>
  );
};

const ResourceCategoryCard = ({ icon, title, iconBg }) => {
  return (
    <div className="bg-white rounded-xl px-4 py-3 shadow-sm  hover:shadow-md hover:-translate-y-1 hover:border-[#652d96] border transition-all duration-200 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center`}>
          <span className="text-white text-sm font-bold">{icon}</span>
        </div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      </div>
    </div>
  );
};

const FeaturedResourceCard = ({ icon, title, description, bgColor, category }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
          <span className="text-white text-2xl">{icon}</span>
        </div>
        <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider">{category}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>
    </div>
  );
};

const Features = () => {
  const topRowFeatures = [
    {
      icon: "🚨",
      title: "Ghosting Alerts",
      description: "Get automated real-time ghosting alerts that let you know when a candidate has checked out so you can take timely action.",
      blurColor: "bg-green-400"
    },
    {
      icon: "🎯",
      title: "Joining Prediction",
      description: "AI-powered prediction that predicts the likelihood of candidate joining & give real-time insights.",
      blurColor: "bg-blue-400"
    },
    {
      icon: "📊",
      title: "Engagement Analytics",
      description: "Track how candidates interact with your offer & in forms to evaluate experience & optimize touchpoints.",
      blurColor: "bg-purple-400"
    }
  ];

  const bottomRowFeatures = [
    {
      icon: "📝",
      title: "Smart Offer Letters",
      description: "Create highly personalized offer letters with smart & personalised content. Track opens, actions on offer & know candidate intension.",
      blurColor: "bg-blue-400"
    },
    {
      icon: "🔄",
      title: "Candidate Feedback Loop",
      description: "Get feedback from candidates that are transparent & on-demand to improve the overall & quality of hiring.",
      blurColor: "bg-purple-400"
    }
  ];

  const categories = [
    { icon: "🌐", title: "Webinars", iconBg: "bg-green-500" },
    { icon: "🎙️", title: "Podcasts", iconBg: "bg-blue-500" },
    { icon: "📝", title: "Blogs", iconBg: "bg-purple-500" },
    { icon: "📊", title: "Calculators", iconBg: "bg-indigo-500" },
    { icon: "📚", title: "Publications", iconBg: "bg-pink-500" }
  ];

  const featuredResources = [
    {
      icon: "📈",
      title: "Predicting Candidate Behavior: The AI Advantage",
      description: "Learn how AI revolutionizes the way we predict candidate behavior and improve offer acceptance rates.",
      bgColor: "bg-purple-600",
      category: "WEBINAR"
    },
    {
      icon: "📚",
      title: "The True Cost of Candidate Ghosting",
      description: "A comprehensive analysis of how candidate ghosting impacts your bottom line and strategies to prevent it.",
      bgColor: "bg-blue-600",
      category: "WHITEPAPER"
    },
    {
      icon: "🧮",
      title: "Offer-to-Join ROI Calculator",
      description: "Calculate the ROI of your offer-to-join process and identify opportunities for improvement.",
      bgColor: "bg-purple-600",
      category: "CALCULATOR"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-[#d7ffec] text-[#652d96] font-normal px-3 py-1 rounded-full text-sm">Key Features</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              AI-Powered Tools to Close Candidates<br />Faster
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines behavioral analytics, engagement tracking, and predictive AI to help you convert more candidates.
            </p>
          </div>
          
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topRowFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                blurColor={feature.blurColor}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bottomRowFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                blurColor={feature.blurColor}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-[#d7ffec] text-[#652d96] font-normal px-3 py-1 rounded-full text-sm">Knowledge Center</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of resources to help you optimize your hiring process and improve candidate conversion.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category, index) => (
              <ResourceCategoryCard 
                key={index} 
                icon={category.icon} 
                title={category.title}
                iconBg={category.iconBg}
              />
            ))}
          </div>
          
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Resources</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <FeaturedResourceCard 
                key={index} 
                icon={resource.icon} 
                title={resource.title} 
                description={resource.description}
                bgColor={resource.bgColor}
                category={resource.category}
              />
            ))}
          </div>
          
          <div className="text-center">
            <button className="text-[#652d96]  px-7 py-3  font-semibold text-md  transition-colors rounded-full border border-[#652d96]">
              View All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;