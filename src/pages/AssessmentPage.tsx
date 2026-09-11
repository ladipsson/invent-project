import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  RotateCcw,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASSESSMENT_QUESTIONS } from '../data/mockData';
import { ProgressBar } from '../components/ProgressBar';

interface AssessmentPageProps {
  onNavigate: (view: string) => void;
  onSelectJourney: (journeyId: string) => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({
  onNavigate,
  onSelectJourney
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: optionId }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#071B33] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#071B33]" />
            <span>Diagnostic Leadership Assessment</span>
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#071B33] tracking-tight">
            Discover your leadership strengths.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            This assessment helps you understand how you naturally react to Nigerian classroom challenges, peer pressure, and team responsibilities — highlighting both your strengths and growth areas.
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Progress and Question Counter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="text-[#071B33]">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span>{progress}% Completed</span>
              </div>
              <ProgressBar progress={progress} size="sm" showPercentage={false} />
            </div>

            {/* Scenario and Prompt */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                Scenario: {currentQ.scenario}
              </span>
              <p className="text-base sm:text-lg font-medium text-[#071B33] leading-relaxed">
                "{currentQ.context}"
              </p>
              <p className="text-xs font-semibold text-slate-500 pt-1">
                When faced with this situation, I usually:
              </p>
            </div>

            {/* Selectable Answers */}
            <div className="space-y-3">
              {currentQ.options.map((option) => {
                const isSelected = answers[currentQ.id] === option.id;
                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'border-[#FFB703] bg-amber-50/50 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'border-[#071B33] bg-[#FFB703]' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#071B33]" />}
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-relaxed">
                      {option.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 disabled:opacity-40 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!answers[currentQ.id]}
                className="px-6 py-2.5 rounded-xl bg-[#071B33] hover:bg-[#0D2745] text-white disabled:opacity-40 text-xs font-bold transition-all shadow-xs flex items-center gap-2"
              >
                <span>{currentQuestionIndex === totalQuestions - 1 ? 'Complete Assessment' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4 text-[#FFB703]" />
              </button>
            </div>

          </div>
        ) : (
          /* Assessment Completed Results Stage */
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in">
            
            <div className="text-center space-y-3 pb-6 border-b border-slate-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#159A6C] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-sora text-3xl font-extrabold text-[#071B33]">
                Assessment Complete!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Here is your personalized leadership diagnostic based on your responses to the 10 real-world Nigerian secondary school scenarios.
              </p>
            </div>

            {/* Results Grid: Strongest Areas vs Areas to Develop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Strongest Areas */}
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4">
                <div className="flex items-center gap-2 text-[#159A6C]">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-sora text-base font-bold text-[#071B33]">
                    Your Strongest Areas
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { power: 'Communication', score: 94, reason: 'You articulate ideas clearly, listen during heated arguments, and choose dialogue over gossip.' },
                    { power: 'Empathy', score: 88, reason: 'You notice classmates in distress and actively help new or struggling students.' },
                    { power: 'Responsibility', score: 85, reason: 'You take pride in your environment and refuse to make excuses when duties are assigned.' }
                  ].map(item => (
                    <div key={item.power} className="p-3.5 rounded-xl bg-white border border-emerald-100 text-xs">
                      <div className="flex items-center justify-between font-bold text-[#071B33] mb-1">
                        <span>{item.power}</span>
                        <span className="text-[#159A6C]">{item.score}% Match</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas to Develop */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-[#071B33]">
                  <TrendingUp className="w-5 h-5 text-[#FFB703]" />
                  <h3 className="font-sora text-base font-bold text-[#071B33]">
                    Areas to Develop
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { power: 'Decision-Making', score: 56, tip: 'Practice weighing long-term consequences when friends invite you to shortcuts or last-minute distractions.' },
                    { power: 'Resilience', score: 62, tip: 'Build stronger recovery systems when facing test disappointments or leadership election setbacks.' }
                  ].map(item => (
                    <div key={item.power} className="p-3.5 rounded-xl bg-white border border-amber-100 text-xs">
                      <div className="flex items-center justify-between font-bold text-[#071B33] mb-1">
                        <span>{item.power}</span>
                        <span className="text-[#071B33]">{item.score}% Focus</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Recommended Journey CTA */}
            <div className="p-6 rounded-2xl bg-[#071B33] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#FFB703] uppercase tracking-wider">
                  Recommended Starting Point
                </span>
                <h4 className="font-sora text-xl font-bold text-white">
                  Journey 06: Communication
                </h4>
                <p className="text-xs text-slate-300">
                  Build upon your natural strength to become an influential, persuasive school speaker.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
                <button
                  onClick={() => onSelectJourney('journey-06')}
                  className="px-6 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold font-sora shadow-md flex items-center gap-2"
                >
                  <span>Start Recommended Journey</span>
                  <ArrowRight className="w-4 h-4 text-[#071B33]" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
