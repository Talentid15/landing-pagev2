import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ResourceCategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <span className="text-purple-600 text-lg">{icon}</span>
        </div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      </div>
    </div>
  );
};

const FeaturedResourceCard = ({ icon, title, description, bgColor = "bg-purple-600" }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Missing Piece",
      description: "Get a complete view of your candidate pipeline from application to first day, with real-time insights into every touchpoint."
    },
    {
      icon: "🎯",
      title: "Job Analytics",
      description: "Get in-depth job performance insights with KPI tracking, helping you hire better and retain talent."
    },
    {
      icon: "📈",
      title: "Engagement Analytics",
      description: "Track candidate engagement levels, identify drop-off points and optimize your hiring funnel."
    },
    {
      icon: "📝",
      title: "Smart Offer Letters",
      description: "Create personalized offer letters with dynamic content. Track opens, views, and engagement metrics."
    },
    {
      icon: "🔄",
      title: "Candidate Feedback Loop",
      description: "Gather structured feedback from candidates to continuously improve your hiring process."
    }
  ];

  const categories = [
    { icon: "🌐", title: "Webinars" },
    { icon: "🎙️", title: "Podcasts" },
    { icon: "📝", title: "Blog" },
    { icon: "📊", title: "Calculators" },
    { icon: "📚", title: "Publications" }
  ];

  const featuredResources = [
    {
      icon: "📈",
      title: "Predicting Candidate Behavior: An AI Advantage",
      description: "Learn how AI revolutionizes the way we predict candidate behavior to improve offer acceptance rates.",
      bgColor: "bg-purple-600"
    },
    {
      icon: "📚",
      title: "The True Cost of Candidate Ghosting",
      description: "A comprehensive analysis of how candidate ghosting impacts your bottom line and strategies to prevent it.",
      bgColor: "bg-blue-600"
    },
    {
      icon: "🧮",
      title: "Offer-to-Join ROI Calculator",
      description: "Calculate the ROI of your offer-to-join process and identify opportunities for improvement.",
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm text-purple-600 font-semibold uppercase tracking-wide">Key Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
              AI-Powered Tools to Close Candidates Faster
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines behavioral analytics, engagement tracking, and predictive AI to help you convert more candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm text-purple-600 font-semibold uppercase tracking-wide">Knowledge Center</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of resources to help you optimize your hiring process and improve candidate conversion.
            </p>
          </div>
          
          {/* Resource Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <ResourceCategoryCard 
                key={index} 
                icon={category.icon} 
                title={category.title} 
              />
            ))}
          </div>
          
          {/* Featured Resources */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Featured Resources</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {featuredResources.map((resource, index) => (
              <FeaturedResourceCard 
                key={index} 
                icon={resource.icon} 
                title={resource.title} 
                description={resource.description}
                bgColor={resource.bgColor}
              />
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-sm">
              View All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;