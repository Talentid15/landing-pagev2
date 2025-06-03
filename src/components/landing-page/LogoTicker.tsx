const TrustSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <p className="text-gray-600 mb-8">Trusted by innovative companies worldwide</p>
      <div className="flex justify-center items-center space-x-12 opacity-60">
        <div className="text-2xl font-bold text-gray-400">OLLI</div>
        <div className="text-2xl font-bold text-gray-400">FIFE</div>
        <div className="text-2xl font-bold text-gray-400">◉125</div>
        <div className="text-2xl font-bold text-gray-400">VIF</div>
        <div className="text-2xl font-bold text-gray-400">FFB</div>
        <div className="text-2xl font-bold text-gray-400">∞⚪</div>
      </div>
      <div className="mt-6">
        <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
          View customer success stories →
        </a>
      </div>
    </section>
  );
};

export default TrustSection;