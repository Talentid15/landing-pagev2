import React from 'react';

export default function PricingPlans() {
  return (
    <div className="min-h-screen py-16 px-4 bg-white"  >
      <div className="max-w-6xl mx-auto" id='pricing'>
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-[#d7ffec] text-[#652d96] font-normal px-3 py-1 rounded-full text-sm">
              Simple Pricing
            </span>
          </div>
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our core predictive features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 text-white relative">
            <div className="mb-8">
              <h3 className="text-[#3affa0] text-lg font-semibold mb-4">Starter</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">₹799</span>
                <span className="text-gray-300 text-lg">/month</span>
              </div>
              <p className="text-gray-300 text-sm">
                Perfect for small teams making up to 10 offers per month.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Up to 10 offers/month</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">30 Candidate Ghosting Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Basic Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Email Support</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited Offer Punch</span>
              </div>
            </div>

            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Started
            </button>
          </div>

          <div className="bg-[#652d96] rounded-2xl p-8 text-white relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                MOST POPULAR
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-[#3affa0] text-lg font-semibold mb-4">Growth</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">₹2499</span>
                <span className="text-purple-200 text-lg">/month</span>
              </div>
              <p className="text-purple-200 text-sm">
                Ideal for growing teams making up to 50 offers per month.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Up to 50 offers/month</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">200 Candidate Ghosting Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Full Analytics Suite</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Priority Support</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited Offer Punch</span>
              </div>
            </div>

            <button className="w-full bg-green-500 hover:bg-[#3affa0] shadow-[0_0_10px_#38ff9f] text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Started
            </button>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white relative">
            <div className="mb-8">
              <h3 className="text-[#3affa0] text-lg font-semibold mb-4">Enterprise</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-300 text-sm">
                For large organizations with custom requirements.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited offers</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited Candidate Ghosting Alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Dedicated Account Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Custom Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">SLA & Premium Support</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3affa0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Unlimited Offer Punch</span>
              </div>
            </div>

            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

       <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}