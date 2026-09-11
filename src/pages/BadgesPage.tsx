import React, { useState } from 'react';
import { Award, CheckCircle2, Lock, Sparkles, Trophy, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Badge } from '../types';

interface BadgesPageProps {
  badges: Badge[];
}

export const BadgesPage: React.FC<BadgesPageProps> = ({ badges }) => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const earnedCount = badges.filter(b => b.earned).length;

  const handleBadgeClick = (badge: Badge) => {
    setSelectedBadge(badge);
    if (badge.earned) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#071B33] text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#071B33]" />
              <span>Leadership Badges & Honors</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-[#071B33] tracking-tight">
              Honors & Digital Credentials
            </h1>
            <p className="text-sm text-slate-600">
              Badges represent practical milestones in classroom ethics, public speaking, community service, and teamwork.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#071B33] flex items-center justify-center font-bold">
              <Award className="w-5 h-5 text-[#FFB703]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase">Earned Honors</span>
              <p className="font-sora text-xl font-extrabold text-[#071B33]">{earnedCount} of {badges.length}</p>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {badges.map((badge) => {
            return (
              <div
                key={badge.id}
                onClick={() => handleBadgeClick(badge)}
                className={`p-6 rounded-2xl border text-center cursor-pointer transition-all flex flex-col justify-between ${
                  badge.earned
                    ? 'bg-white border-amber-200 hover:border-[#FFB703] hover:shadow-md'
                    : 'bg-slate-50/70 border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Badge Icon Medallion */}
                  <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 transition-transform hover:scale-110 ${
                    badge.earned
                      ? 'bg-gradient-to-br from-[#FFD000] to-[#FF9F00] text-[#071B33] shadow-md border-4 border-white ring-2 ring-[#FFB703]'
                      : 'bg-slate-200 text-slate-400 border-4 border-white'
                  }`}>
                    {badge.earned ? (
                      <Award className="w-10 h-10" />
                    ) : (
                      <Lock className="w-8 h-8" />
                    )}
                  </div>

                  {/* Title & Journey */}
                  <h3 className="font-sora text-base font-bold text-[#071B33] mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {badge.subtitle || `Journey ${badge.journeyNumber}`}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-inter line-clamp-2">
                    {badge.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  {badge.earned ? (
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#159A6C]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Earned on {badge.earnedDate || 'Term 2'}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1 text-xs font-semibold text-slate-400">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Complete Journey to Unlock</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Badge Detail Modal */}
        {selectedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-4">
              
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center ${
                selectedBadge.earned
                  ? 'bg-gradient-to-br from-[#FFD000] to-[#FF9F00] text-[#071B33] shadow-lg border-4 border-white ring-4 ring-[#FFB703]/30'
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {selectedBadge.earned ? <Award className="w-12 h-12" /> : <Lock className="w-10 h-10" />}
              </div>

              <div>
                <h3 className="font-sora text-xl font-bold text-[#071B33]">
                  {selectedBadge.title}
                </h3>
                <p className="text-xs font-semibold text-[#FFB703] bg-[#071B33] px-3 py-1 rounded-full inline-block mt-2">
                  {selectedBadge.subtitle || `Journey ${selectedBadge.journeyNumber}`}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedBadge.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5">
                <span className="font-bold text-[#071B33] block">Criteria for Earning:</span>
                <p className="text-slate-600">
                  {selectedBadge.criteria}
                </p>
              </div>

              <button
                onClick={() => setSelectedBadge(null)}
                className="w-full py-2.5 bg-[#071B33] hover:bg-[#0D2745] text-white text-xs font-bold rounded-xl transition-colors"
              >
                Close Badge Details
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
