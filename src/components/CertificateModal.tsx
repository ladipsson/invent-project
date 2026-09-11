import React from 'react';
import { X, Award, Download, Printer, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    // Trigger standard browser print/save dialog
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#071B33] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#FFB703]" />
            <span className="font-sora text-sm font-bold text-slate-100">
              Official INVENT Leadership Credential
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold rounded-lg transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-8 overflow-y-auto bg-[#FAF8F5] text-[#071B33]">
          <div className="relative border-8 border-double border-[#071B33] bg-white p-8 md:p-12 rounded-xl shadow-md text-center">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#FFB703]" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#FFB703]" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#FFB703]" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#FFB703]" />

            {/* Header / Brand */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-14 h-14 rounded-full bg-[#071B33] flex items-center justify-center text-[#FFB703] shadow-md border-2 border-[#FFB703] mb-2">
                <Award className="w-8 h-8" />
              </div>
              <span className="font-sora text-2xl font-extrabold tracking-widest text-[#071B33]">
                INVENT
              </span>
              <p className="text-xs font-bold tracking-widest text-[#FFB703] uppercase">
                Youth Leadership Initiative • Nigeria
              </p>
              <p className="text-[11px] text-slate-500 italic tracking-wider">
                "Learn. Lead. Serve. Create Impact."
              </p>
            </div>

            <div className="my-6 border-b border-slate-200 w-3/4 mx-auto" />

            {/* Certificate Body Text */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-500">
                This is to officially certify that
              </p>
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold text-[#071B33] tracking-tight">
                {certificate.recipientName}
              </h2>
              <p className="text-sm font-medium text-slate-600">
                Student of <span className="font-bold text-[#071B33]">{certificate.recipientSchool}</span> ({certificate.recipientClass})
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto pt-2">
                has successfully fulfilled all requirements, ethical criteria, reflective journals, and practical community evidence for:
              </p>
              <div className="inline-block px-6 py-2 rounded-xl bg-amber-50 border border-amber-200 text-[#071B33] font-sora font-bold text-sm md:text-base">
                {certificate.completionTitle}
              </div>
            </div>

            {/* Signatures & Seal */}
            <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-3 items-end text-xs">
              <div className="text-center space-y-1">
                <div className="font-serif italic text-sm text-slate-700 font-bold border-b border-slate-400 pb-1 w-36 mx-auto">
                  Emmanuel Okafor
                </div>
                <p className="font-bold text-slate-800">Mr. Emmanuel Okafor</p>
                <p className="text-[10px] text-slate-500">Senior Leadership Mentor</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#FFB703] bg-amber-50/80 flex flex-col items-center justify-center text-[#071B33] p-1 shadow-inner">
                  <ShieldCheck className="w-6 h-6 text-[#FFB703]" />
                  <span className="text-[8px] font-extrabold tracking-tighter uppercase">VERIFIED</span>
                </div>
                <span className="text-[9px] text-slate-400 mt-1 font-mono">{certificate.verificationCode}</span>
              </div>

              <div className="text-center space-y-1">
                <div className="font-serif italic text-sm text-slate-700 font-bold border-b border-slate-400 pb-1 w-36 mx-auto">
                  Stella Babatunde
                </div>
                <p className="font-bold text-slate-800">Dr. Stella Babatunde</p>
                <p className="text-[10px] text-slate-500">Executive Director, INVENT Africa</p>
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="mt-8 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-3">
              <span>Certificate ID: {certificate.certificateNumber}</span>
              <span>Issued: {certificate.issueDate}</span>
              <span>inventleadership.ng/verify</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
