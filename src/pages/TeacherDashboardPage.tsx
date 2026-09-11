import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Eye, 
  MessageSquare, 
  AlertCircle, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { EvidenceItem } from '../types';
import { ReviewEvidenceModal } from '../components/ReviewEvidenceModal';

interface TeacherDashboardPageProps {
  evidenceList: EvidenceItem[];
  onApproveEvidence: (id: string, feedback: string) => void;
  onRequestRevision: (id: string, feedback: string) => void;
}

export const TeacherDashboardPage: React.FC<TeacherDashboardPageProps> = ({
  evidenceList,
  onApproveEvidence,
  onRequestRevision
}) => {
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);

  const pendingList = evidenceList.filter(e => e.status === 'Under Review');
  const approvedList = evidenceList.filter(e => e.status === 'Approved');

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Mentor Header */}
        <div className="bg-[#071B33] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2745] border border-slate-700 text-xs font-bold text-[#FFB703] uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Mentor & Teacher Portal</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-white">
              Good morning, Mr. Emmanuel Okafor
            </h1>
            <p className="text-sm text-slate-300">
              Senior Leadership Mentor • King's College Lagos (SSS 2 Cohort)
            </p>
          </div>

          <div className="bg-[#0D2745] px-4 py-3 rounded-2xl border border-slate-700 text-right">
            <span className="text-xs text-slate-400 block">Pending Evidence Reviews</span>
            <span className="font-sora text-2xl font-extrabold text-[#FFB703]">
              {pendingList.length} submissions
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Mentored Students</span>
            <p className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">42</p>
            <span className="text-[10px] text-slate-400">King's College SSS 2</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Pending Review</span>
            <p className="font-sora text-3xl font-extrabold text-[#FFB703] mt-2">{pendingList.length}</p>
            <span className="text-[10px] text-amber-600 font-bold">Awaiting assessment</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Approved This Term</span>
            <p className="font-sora text-3xl font-extrabold text-[#159A6C] mt-2">{approvedList.length}</p>
            <span className="text-[10px] text-emerald-600 font-bold">Verified credentials</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Cohort Average</span>
            <p className="font-sora text-3xl font-extrabold text-[#071B33] mt-2">67%</p>
            <span className="text-[10px] text-slate-400">On-track completion</span>
          </div>
        </div>

        {/* Submissions Awaiting Mentor Review */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-sora text-xl font-bold text-[#071B33]">
                Submissions Awaiting Rubric Review
              </h2>
              <p className="text-xs text-slate-500">
                Review uploaded recordings, writeups, and school activities to provide constructive feedback.
              </p>
            </div>
            <span className="text-xs font-bold text-[#071B33] bg-amber-100 px-3 py-1 rounded-full">
              {pendingList.length} in queue
            </span>
          </div>

          {pendingList.length === 0 ? (
            <div className="p-10 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-[#159A6C] mx-auto" />
              <p className="font-sora text-base font-bold text-[#071B33]">
                Review Queue is Clear!
              </p>
              <p className="text-xs text-slate-500">
                All student evidence has been reviewed and graded.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingList.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-amber-200 bg-amber-50/20 hover:bg-amber-50/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-[#FFB703] bg-[#071B33] px-2 py-0.5 rounded">
                        JOURNEY {item.journeyNumber}
                      </span>
                      <span className="text-xs font-bold text-[#071B33]">
                        {item.journeyTitle}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="font-sora text-base font-bold text-[#071B33]">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-1">
                      Student: <strong>{item.studentName}</strong> ({item.studentClass} • {item.studentSchool})
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setSelectedEvidence(item)}
                      className="px-5 py-2.5 bg-[#071B33] hover:bg-[#0D2745] text-white text-xs font-bold font-sora rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#FFB703]" />
                      <span>Review & Grade</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recently Approved Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="font-sora text-lg font-bold text-[#071B33]">
            Recently Approved Evidence
          </h3>
          <div className="space-y-3">
            {approvedList.slice(0, 3).map((item) => (
              <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#071B33]">{item.title}</span>
                  <p className="text-slate-500">{item.studentName} • {item.journeyTitle}</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#159A6C]" />
                  <span>Approved & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Evidence Modal */}
        {selectedEvidence && (
          <ReviewEvidenceModal
            evidence={selectedEvidence}
            isOpen={true}
            onClose={() => setSelectedEvidence(null)}
            onApprove={onApproveEvidence}
            onRequestRevision={onRequestRevision}
          />
        )}

      </div>
    </div>
  );
};
