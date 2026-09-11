import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, FileText, User, Calendar, Award } from 'lucide-react';
import { EvidenceItem } from '../types';

interface ReviewEvidenceModalProps {
  evidence: EvidenceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (id: string, feedback: string) => void;
  onRequestRevision: (id: string, feedback: string) => void;
}

export const ReviewEvidenceModal: React.FC<ReviewEvidenceModalProps> = ({
  evidence,
  isOpen,
  onClose,
  onApprove,
  onRequestRevision
}) => {
  if (!isOpen || !evidence) return null;

  const [feedback, setFeedback] = useState(evidence.feedback || 'Well done! Clear demonstration of leadership principles in your school environment.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#071B33] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#FFB703]" />
            <span className="font-sora text-sm font-bold">
              Mentor Rubric Review — Journey {evidence.journeyNumber}: {evidence.journeyTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          
          {/* Student details bar */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#071B33] text-[#FFB703] flex items-center justify-center font-bold">
                {evidence.studentName[0]}
              </div>
              <div>
                <p className="font-bold text-[#071B33] text-sm">{evidence.studentName}</p>
                <p className="text-slate-500">{evidence.studentClass} • {evidence.studentSchool}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#FFB703]" />
                {evidence.submissionDate}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200/80 font-semibold text-[#071B33]">
                {evidence.type}
              </span>
            </div>
          </div>

          {/* Submission content */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Submission Title
            </h4>
            <p className="font-sora text-base font-bold text-[#071B33]">
              {evidence.title}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Student Reflection & Activity Description
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
              {evidence.description}
            </div>
          </div>

          {/* Attachments */}
          {evidence.attachments && evidence.attachments.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Submitted Attachments
              </h4>
              <div className="flex flex-wrap gap-2">
                {evidence.attachments.map((att, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
                    <FileText className="w-4 h-4 text-[#FFB703]" />
                    <span>{att.name}</span>
                    <span className="text-slate-400">({att.size})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teacher / Mentor Feedback Input */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mentor Rubric Comments & Encouragement
            </label>
            <textarea
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Provide constructive, encouraging feedback grounded in leadership growth..."
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
            />
          </div>

        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
          >
            Cancel
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onRequestRevision(evidence.id, feedback);
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Request Revision</span>
            </button>
            <button
              onClick={() => {
                onApprove(evidence.id, feedback);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#159A6C] hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Approve Evidence</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
