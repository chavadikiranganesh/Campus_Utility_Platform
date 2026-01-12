
import React from 'react';
import { NEARBY_ACCOMMODATIONS } from '../constants.tsx';

const Accommodations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Campus Accommodations</h1>
        <p className="text-slate-500 max-w-2xl">Verified PGs and Hostels near SVCE Sriperumbudur. Save time and find the perfect stay for your college years.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {NEARBY_ACCOMMODATIONS.map(place => (
          <div key={place.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col group">
            <div className="relative h-64">
              <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-2xl shadow-lg font-bold text-green-700">
                ₹{place.rent}/mo
              </div>
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                {place.type}
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{place.name}</h3>
              <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                {place.location}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {place.facilities.map(f => (
                  <span key={f} className="bg-slate-50 text-slate-600 text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 mt-auto">
                <a href={`tel:${place.contact}`} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-bold transition shadow-md">
                  Call Owner
                </a>
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodations;
