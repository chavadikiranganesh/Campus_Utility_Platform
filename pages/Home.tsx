
import React from 'react';
import { LATEST_RESOURCES, NEARBY_ACCOMMODATIONS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden mb-12 border border-blue-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
              Campus Utility
            </h1>
            <p className="text-xl text-slate-600">
              Resource Sharing & Accommodation Assistance Platform for the SVCE Community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/resources" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">
                Browse Resources
              </a>
              <a href="#/accommodations" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">
                Find Accommodations
              </a>
            </div>
          </div>
          <div className="flex-1">
             <img 
               src="/images/ChatGPT Image Jan 13, 2026, 01_13_02 PM.png" 
               alt="Campus Illustration" 
               className="rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500"
             />
          </div>
        </div>
      </div>

      {/* Feature Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-blue-100 rounded-xl text-blue-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Buy & Sell Used Items</h3>
              <p className="text-slate-500 mb-4">Find and trade books, calculators, and drafting equipment within the college network.</p>
              <a href="#/resources" className="text-blue-600 font-semibold hover:underline">Explore Resources →</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-green-100 rounded-xl text-green-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Accommodation Assistance</h3>
              <p className="text-slate-500 mb-4">Discover verified PGs and hostels near campus with rent and facilities details.</p>
              <a href="#/accommodations" className="text-green-600 font-semibold hover:underline">View Listings →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Assistant */}
      <div className="bg-white rounded-2xl p-8 mb-12 border border-indigo-100 shadow-sm text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Meet Your Campus Assistant</h2>
          <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 italic text-slate-600">
            "Hi there! I can help you find affordable PGs or textbooks for your next semester. How can I assist you today?"
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">Search Items</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">Find PGs</button>
            <a href="#/chatbot" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium">Ask a Question</a>
          </div>
        </div>
      </div>

      {/* Latest Items Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-2xl font-bold text-slate-800">Latest Resources</h3>
            <a href="#/resources" className="text-blue-600 hover:underline">View All →</a>
          </div>
          <div className="space-y-4">
            {LATEST_RESOURCES.map(item => (
              <div key={item.id} className="bg-white border p-4 rounded-xl flex items-center gap-4 hover:shadow-md transition cursor-pointer">
                <img src={item.image} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500">₹{item.price}</p>
                </div>
                <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg">
                  ₹{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-2xl font-bold text-slate-800">Nearby Accommodations</h3>
            <a href="#/accommodations" className="text-green-600 hover:underline">View All →</a>
          </div>
          <div className="space-y-4">
            {NEARBY_ACCOMMODATIONS.map(place => (
              <div key={place.id} className="bg-white border p-4 rounded-xl flex items-center gap-4 hover:shadow-md transition cursor-pointer">
                <img src={place.image} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{place.name}</h4>
                  <p className="text-sm text-slate-500">₹{place.rent}/month</p>
                </div>
                <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg">
                  ₹{place.rent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-wrap justify-center items-center gap-8">
        <div className="flex items-center gap-2 text-slate-600 font-semibold">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div> React.js
        </div>
        <div className="flex items-center gap-2 text-slate-600 font-semibold">
          <div className="w-2 h-2 rounded-full bg-blue-400"></div> Tailwind CSS
        </div>
        <div className="flex items-center gap-2 text-slate-600 font-semibold">
          <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Machine Learning
        </div>
        <div className="flex items-center gap-2 text-slate-600 font-semibold">
          <div className="w-2 h-2 rounded-full bg-slate-800"></div> SQL Database
        </div>
      </div>
    </div>
  );
};

export default Home;
