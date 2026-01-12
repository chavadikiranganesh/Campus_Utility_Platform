
import React, { useState } from 'react';
// Fix: Import Resource from constants.tsx instead of types.ts
import { LATEST_RESOURCES, Resource } from '../constants.tsx';

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filtered = LATEST_RESOURCES.filter(r => 
    (filter === 'All' || r.category === filter) &&
    (r.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Student Marketplace</h1>
          <p className="text-slate-500">Find affordable books, tools, and electronics from your seniors.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <input 
            type="text" 
            placeholder="Search resources..."
            className="border rounded-lg px-4 py-2 w-full md:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Book">Books</option>
            <option value="Calculator">Calculators</option>
            <option value="Tools">Tools</option>
          </select>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition">
            Sell Item
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="relative h-48 bg-slate-100">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-blue-700">
                {item.category}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                <span className="text-xl font-extrabold text-blue-700">₹{item.price}</span>
              </div>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Condition: {item.condition}</p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Seller: <span className="font-semibold text-slate-700">{item.sellerName}</span>
                </div>
                <button className="text-blue-600 font-bold hover:text-blue-800 transition text-sm">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 text-lg">No items found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Resources;