import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "3X", description: "Higher Offer Acceptance", valueColor: "text-[#652d96]" },
    { value: "-78%", description: "Reduced Ghosting Rate", valueColor: "text-[#652d96]" },
    { value: "5 Days", description: "Faster Time-to-Hire", valueColor: "text-[#652d96]" }
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-lg">
            <div className={`text-3xl font-bold ${stat.valueColor || 'text-gray-800'} mb-2`}>{stat.value}</div>
            <div className="text-base text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;