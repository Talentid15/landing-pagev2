import React, { useState } from 'react';

export default function TalentIdForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    teamSize: '1-10 employees'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#652d96]">
      <div className="w-full max-w-3xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Losing Candidates?
          </h1>
          <p className="text-white text-lg opacity-90">
            Book a demo today and see how TalentId can transform your hiring process.
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-white/10" style={{
          backdropFilter: 'blur(10px)',
        }}>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-none outline-none text-white placeholder-gray-300"
                  style={{
                    background: 'rgba(139, 69, 193, 0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 outline-none text-white placeholder-gray-300"
                  style={{
                    background: 'rgba(139, 69, 193, 0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Work Email
              </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-0 outline-none text-white placeholder-gray-300"
                style={{
                  background: 'rgba(139, 69, 193, 0.4)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder=""
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-0 outline-none text-white placeholder-gray-300"
                style={{
                  background: 'rgba(139, 69, 193, 0.4)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder=""
              />
            </div>

            {/* Team Size */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Team Size
              </label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-0 outline-none text-white appearance-none cursor-pointer"
                style={{
                  background: 'rgba(139, 69, 193, 0.4)',
                  backdropFilter: 'blur(10px)',
                  backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'white\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '12px'
                }}
              >
                <option value="1-10 employees">1-10 employees</option>
                <option value="11-50 employees">11-50 employees</option>
                <option value="51-200 employees">51-200 employees</option>
                <option value="201-500 employees">201-500 employees</option>
                <option value="500+ employees">500+ employees</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-4 rounded-lg font-medium text-lg shadow-[0_0_10px_#38ff9f]  bg-[#38ff9f] text-black backdrop-brightness-90"
            >
              Book My Demo
            </button>

            <p className="text-center text-sm text-white opacity-70 mt-4">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#38ff9f]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#38ff9f]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#38ff9f]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}