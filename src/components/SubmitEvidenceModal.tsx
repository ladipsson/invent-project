import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, FileText, Image, Film, Award } from 'lucide-react';
import { EvidenceType, Journey } from '../types';

interface SubmitEvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  journeys: Journey[];
  defaultJourneyId?: string;
  onSubmit: (evidence: {
    journeyId: string;
    journeyTitle: string;
    journeyNumber: string;
    title: string;
    type: EvidenceType;
    description: string;
    fileName?: string;
  }) => void;
}

export const SubmitEvidenceModal: React.FC<SubmitEvidenceModalProps> = ({
  isOpen,
  onClose,
  journeys,
  defaultJourneyId,
  onSubmit
}) => {
  if (!isOpen) return null;

  const defaultJourney = journeys.find(j => j.id === defaultJourneyId) || journeys[0];

  const [selectedJourneyId, setSelectedJourneyId] = useState(defaultJourney.id);
  const [evidenceType, setEvidenceType] = useState<EvidenceType>('Challenge submission');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const evidenceTypes: { type: EvidenceType; label: string; icon: any }[] = [
    { type: 'Challenge submission', label: 'Challenge Action', icon: Award },
    { type: 'Reflection', label: 'Written Reflection', icon: FileText },
    { type: 'Project', label: 'Project Portfolio', icon: FileText },
    { type: 'Photo', label: 'Photo Evidence', icon: Image },
    { type: 'Video', label: 'Video / Audio Speech', icon: Film },
    { type: 'Document', label: 'Document / Report', icon: FileText }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setIsSubmitting(true);
    const j = journeys.find(item => item.id === selectedJourneyId) || journeys[0];

    setTimeout(() => {
      onSubmit({
        journeyId: j.id,
        journeyTitle: j.title,
        journeyNumber: j.number,
        title,
        type: evidenceType,
        description,
        fileName: fileName || (evidenceType === 'Video' ? 'speech_recording.mp4' : 'leadership_report.pdf')
      });
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess(false);
        onClose();
      }, 1400);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#071B33] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <UploadCloud className="w-5 h-5 text-[#FFB703]" />
            <span className="font-sora text-sm font-bold">
              Submit Real-Life Leadership Evidence
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedSuccess ? (
          <div className="p-10 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#159A6C] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#071B33]">
              Evidence Submitted Successfully!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your submission has been queued for mentor review and added to your personal Leadership Portfolio.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Journey Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Select Leadership Journey
              </label>
              <select
                value={selectedJourneyId}
                onChange={(e) => setSelectedJourneyId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                {journeys.map(j => (
                  <option key={j.id} value={j.id}>
                    Journey {j.number}: {j.title} ({j.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Evidence Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Evidence Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {evidenceTypes.map(({ type, label, icon: Icon }) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEvidenceType(type)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      evidenceType === type
                        ? 'border-[#FFB703] bg-amber-50/70 text-[#071B33] shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${evidenceType === type ? 'text-[#FFB703]' : 'text-slate-400'}`} />
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Evidence Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Title of Evidence / Activity
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., 3-Minute Prefect Debate Speech on Student Unity"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              />
            </div>

            {/* Description & Reflection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Description & Practical Reflection
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what you did, the Nigerian classroom or community context, how peers responded, and what this revealed about your leadership..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#071B33] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              />
            </div>

            {/* File Upload Attachment Area */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Attach Media / Document / Proof
              </label>
              <div 
                className="border-2 border-dashed border-slate-300 hover:border-[#FFB703] rounded-xl p-4 text-center bg-slate-50 cursor-pointer transition-colors"
                onClick={() => {
                  const simulatedFiles = ['speech_video.mp4', 'habit_tracker_log.pdf', 'classroom_cleanup_photo.jpg', 'peer_feedback_sheet.docx'];
                  const picked = simulatedFiles[Math.floor(Math.random() * simulatedFiles.length)];
                  setFileName(picked);
                }}
              >
                <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-slate-600">
                  {fileName ? (
                    <span className="text-[#159A6C] font-bold">Attached: {fileName} (Click to change)</span>
                  ) : (
                    <>Click to browse or drag and drop audio, video, PDF, or photos</>
                  )}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Supports MP4, MP3, PDF, JPG up to 50MB</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-sm font-bold transition-all shadow-xs flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting to Mentor...</span>
                ) : (
                  <>
                    <span>Submit for Review</span>
                    <CheckCircle2 className="w-4 h-4 text-[#071B33]" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
