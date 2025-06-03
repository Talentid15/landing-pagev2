import React from 'react';

const Resources = () => {
  // Feature Card Component (Embedded)
  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600">{icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };

  // Resource Category Card Component (Embedded)
  const ResourceCategoryCard = ({ icon, title }) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600">{icon}</span>
        </div>
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
      </div>
    );
  };

  // Featured Resource Card Component (Embedded)
  const FeaturedResourceCard = ({ icon, title, description }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-purple-600">{icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };

  const features = [
    {
      icon: "🔔",
      title: "Chloong Mane",
      description: "Ena hoteno heno a quacitelar Disopo chlosen one botrophany."
    },
    {
      icon: "📊",
      title: "Jonng Feodlan",
      description: "De hoteno a botrophany bosd han DKG, adoving hino bind Gyprion."
    },
    {
      icon: "📈",
      title: "Engagemet Anofytcs",
      description: "Tro natene dolenfent henoa tidel Quyel heno hhoteno heno hofel."
    },
    {
      icon: "📝",
      title: "Frorat Chlno Tatters",
      description: "Losing quend heno salone tilling Tino banke heno. Flog quend gilno tilno banelofec."
    },
    {
      icon: "🔄",
      title: "Conaldate Feodback toop",
      description: "Gymapheren quol hofgen heno tilno hofel hofgen hofel hofgen hofel."
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
      description: "Learn how AI revolutionizes the way we predict candidate behavior to improve offer acceptance rates."
    },
    {
      icon: "📚",
      title: "The True Cost of Candidate Ghosting",
      description: "A comprehensive analysis of how candidate ghosting impacts your bottom line and strategies to prevent it."
    },
    {
      icon: "🧮",
      title: "Offer-to-Join ROI Calculator",
      description: "Calculate the ROI of your offer-to-join process and identify opportunities for improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Features Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-sm text-purple-600 font-medium uppercase">Key Features</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">AI-Powered Tools to Close Candidates Faster</h2>
            <p className="text-gray-600 mt-4">
              Our platform combines behavioral analytics, engagement tracking, and predictive AI to help you convert more candidates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-sm text-purple-600 font-medium uppercase">Knowledge Center</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Resources</h2>
            <p className="text-gray-600 mt-4">
              Explore our collection of resources to help you optimize your hiring process and improve candidate conversion.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <ResourceCategoryCard key={index} icon={category.icon} title={category.title} />
            ))}
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Featured Resources</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredResources.map((resource, index) => (
              <FeaturedResourceCard key={index} icon={resource.icon} title={resource.title} description={resource.description} />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
              View All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;