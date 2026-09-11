import React, { useState } from 'react';
import { Search, Compass, CheckCircle2, ArrowRight, Clock, Filter, Sparkles } from 'lucide-react';
import { Journey } from '../types';
import { ProgressBar } from '../components/ProgressBar';

interface JourneysCatalogPageProps {
  journeys: Journey[];
  onSelectJourney: (journeyId: string) => void;
  onNavigate: (view: string) => void;
}

export const JourneysCatalogPage: React.FC<JourneysCatalogPageProps> = ({
  journeys,
  onSelectJourney,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Foundation', 'Interpersonal', 'Action & Impact'];

  const filteredJourneys = journeys.filter((j) => {
    const matchesCategory = selectedCategory === 'All' || j.category === selectedCategory;
    const matchesSearch = 
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-left space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#071B33] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#071B33]" />
            <span>The 14 Powers Curriculum</span>
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            14 Powers of Youth Leadership
          </h1>
          <p className="text-base text-slate-600 max-w-2xl">
            A comprehensive character and leadership pathway developed specifically for Nigerian secondary school students. Every journey cultivates practical habits, moral clarity, and teamwork.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#071B33] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search powers or skills..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
            />
          </div>

        </div>

        {/* 14 Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJourneys.map((journey) => {
            const isCompleted = journey.status === 'Completed';
            const isInProgress = journey.status === 'In Progress';

            return (
              <div
                key={journey.id}
                className={`p-6 rounded-2xl border bg-white flex flex-col justify-between text-left transition-all ${
                  isInProgress
                    ? 'border-[#FFB703] ring-1 ring-[#FFB703] shadow-md bg-amber-50/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sora text-2xl font-extrabold text-[#FFB703]">
                      POWER {journey.number}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {journey.category}
                    </span>
                  </div>

                  <h3 className="font-sora text-xl font-bold text-[#071B33] uppercase tracking-tight mb-1">
                    {journey.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#071B33]/70 italic mb-3">
                    "{journey.tagline}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {journey.shortDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {journey.estimatedMinutes} mins practical study
                    </span>
                    <span className="font-bold text-[#071B33]">
                      {journey.progress}%
                    </span>
                  </div>

                  <ProgressBar 
                    progress={journey.progress} 
                    size="sm" 
                    variant={isCompleted ? 'green' : 'gold'} 
                    showPercentage={false}
                  />

                  <button
                    onClick={() => onSelectJourney(journey.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                      isInProgress
                        ? 'bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33]'
                        : isCompleted
                        ? 'bg-emerald-50 text-[#159A6C] border border-emerald-200 hover:bg-emerald-100'
                        : 'bg-[#071B33] hover:bg-[#0D2745] text-white'
                    }`}
                  >
                    <span>{isCompleted ? 'Review Journey' : isInProgress ? 'Continue Journey' : 'Start Journey'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help / Assessment banner */}
        <div className="mt-14 p-8 rounded-3xl bg-[#071B33] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <span className="text-xs font-bold text-[#FFB703] uppercase tracking-wider">
              Not sure which journey to prioritize?
            </span>
            <h3 className="font-sora text-2xl font-bold text-white mt-1">
              Take the 10-Minute Leadership Strengths Assessment
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Answer 10 real-world Nigerian secondary school scenarios to receive customized recommendations tailored to your character strengths.
            </p>
          </div>
          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-3 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold font-sora shadow-md whitespace-nowrap"
          >
            Take Free Assessment
          </button>
        </div>

      </div>
    </div>
  );
};
