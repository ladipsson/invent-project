import React, { useState } from 'react';
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Award, 
  Printer, 
  Filter, 
  Compass, 
  User, 
  School, 
  Download,
  Calendar,
  Sparkles
} from 'lucide-react';
import { StudentProfile, EvidenceItem, Journey } from '../types';

interface PortfolioPageProps {
  studentProfile: StudentProfile;
  evidenceList: EvidenceItem[];
  journeys: Journey[];
  onOpenEvidenceModal: () => void;
  onSelectJourney: (journeyId: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  studentProfile,
  evidenceList,
  journeys,
  onOpenEvidenceModal,
  onSelectJourney
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredEvidence = evidenceList.filter((item) => {
    if (filterStatus === 'All') return true;
    return item.status === filterStatus;
  });

  const approvedCount = evidenceList.filter(e => e.status === 'Approved').length;
  const pendingCount = evidenceList.filter(e => e.status === 'Under Review').length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#071B33] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-[#071B33]" />
              <span>Verified Leadership Portfolio</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-[#071B33] tracking-tight">
              My Leadership Portfolio
            </h1>
            <p className="text-sm text-slate-600">
              A permanent, verified record of your practical leadership actions, school initiatives, and mentor assessments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Portfolio</span>
            </button>

            <button
              onClick={onOpenEvidenceModal}
              className="px-5 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold font-sora flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <UploadCloud className="w-4 h-4 text-[#071B33]" />
              <span>Submit New Evidence</span>
            </button>
          </div>
        </div>

        {/* Student Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="flex items-center gap-4 md:col-span-2">
              <div className="w-16 h-16 rounded-2xl bg-[#071B33] border-2 border-[#FFB703] text-[#FFB703] flex items-center justify-center font-sora font-extrabold text-2xl shadow-md">
                DA
              </div>
              <div>
                <h3 className="font-sora text-xl font-bold text-[#071B33]">
                  {studentProfile.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {studentProfile.classGrade} • {studentProfile.school}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Mentor: {studentProfile.mentorName}
                  </span>
                  <span className="text-[10px] font-bold text-[#071B33] bg-amber-100 px-2 py-0.5 rounded-full">
                    Cohort 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs font-semibold text-slate-500 block">Verified Evidence</span>
              <span className="font-sora text-2xl font-extrabold text-[#071B33]">{approvedCount}</span>
              <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Approved by Mentor</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs font-semibold text-slate-500 block">Pending Review</span>
              <span className="font-sora text-2xl font-extrabold text-[#071B33]">{pendingCount}</span>
              <span className="text-[10px] text-amber-600 font-bold block mt-0.5">In Review Queue</span>
            </div>

          </div>
        </div>

        {/* Evidence Filter and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-700">Filter by Status:</span>
            <div className="flex items-center gap-1.5">
              {['All', 'Approved', 'Under Review', 'Needs Revision'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                    filterStatus === status
                      ? 'bg-[#071B33] text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-slate-500 font-semibold">
            Showing {filteredEvidence.length} items
          </span>
        </div>

        {/* Evidence List */}
        <div className="space-y-4">
          {filteredEvidence.map((evidence) => {
            const isApproved = evidence.status === 'Approved';
            const isReview = evidence.status === 'Under Review';
            const isRevision = evidence.status === 'Needs Revision';

            return (
              <div
                key={evidence.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
              >
                {/* Item Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded">
                      POWER {evidence.journeyNumber}
                    </span>
                    <span className="font-sora text-sm font-bold text-[#071B33]">
                      {evidence.journeyTitle}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {evidence.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {evidence.submissionDate}
                    </span>

                    {/* Status Badge */}
                    {isApproved && (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#159A6C] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approved</span>
                      </span>
                    )}
                    {isReview && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Under Review</span>
                      </span>
                    )}
                    {isRevision && (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-full">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Needs Revision</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h4 className="font-sora text-base font-bold text-[#071B33] mb-1.5">
                    {evidence.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-inter">
                    {evidence.description}
                  </p>
                </div>

                {/* Attachments */}
                {evidence.attachments && evidence.attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {evidence.attachments.map((att, i) => (
                      <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                        <FileText className="w-3.5 h-3.5 text-[#FFB703]" />
                        <span>{att.name}</span>
                        <span className="text-[10px] text-slate-400">({att.size})</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mentor Feedback Note */}
                {evidence.feedback && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-[#071B33] font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
                      <span>Mentor Feedback (Mr. Emmanuel Okafor):</span>
                    </div>
                    <p className="text-slate-600 italic">
                      "{evidence.feedback}"
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
