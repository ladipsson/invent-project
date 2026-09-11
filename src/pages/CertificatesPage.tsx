import React, { useState } from 'react';
import { Award, ShieldCheck, Download, Printer, Eye, ExternalLink } from 'lucide-react';
import { Certificate, StudentProfile } from '../types';
import { CertificateModal } from '../components/CertificateModal';

interface CertificatesPageProps {
  certificates: Certificate[];
  studentProfile: StudentProfile;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  certificates,
  studentProfile
}) => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#071B33] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#071B33]" />
              <span>Official Leadership Credentials</span>
            </div>
            <h1 className="font-sora text-3xl font-extrabold text-[#071B33] tracking-tight">
              My Verified Certificates
            </h1>
            <p className="text-sm text-slate-600">
              Official accredited credentials acknowledging milestone completion in the INVENT Leadership Journey™.
            </p>
          </div>

          <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 text-xs font-bold text-[#071B33]">
            <Award className="w-4 h-4 text-[#FFB703]" />
            <span>{certificates.length} Credentials Issued</span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-xs hover:border-[#FFB703] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#FFB703] bg-[#071B33] px-3 py-1 rounded-full uppercase tracking-wider">
                    {cert.title}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    ID: {cert.certificateNumber}
                  </span>
                </div>

                <div>
                  <h3 className="font-sora text-2xl font-bold text-[#071B33]">
                    {cert.completionTitle}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Awarded to <span className="font-bold text-[#071B33]">{cert.recipientName}</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    {cert.recipientSchool} • {cert.recipientClass}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Issue Date:</span>
                    <span className="font-bold text-[#071B33]">{cert.issueDate}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Verification Code:</span>
                    <span className="font-mono font-bold text-[#071B33]">{cert.verificationCode}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Signatures:</span>
                    <span className="font-semibold text-slate-700">Mr. E. Okafor & Dr. S. Babatunde</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href="#verify"
                  onClick={(e) => { e.preventDefault(); setActiveCert(cert); }}
                  className="text-xs font-bold text-[#071B33] hover:text-[#FFB703] flex items-center gap-1"
                >
                  <ShieldCheck className="w-4 h-4 text-[#159A6C]" />
                  <span>Verify Online</span>
                </a>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="px-5 py-2.5 rounded-xl bg-[#FFB703] hover:bg-[#F9A900] text-[#071B33] text-xs font-bold font-sora flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Official Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Info Box */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
          <p className="font-bold text-[#071B33] text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#159A6C]" />
            About INVENT Verification Standards:
          </p>
          <p>
            All INVENT credentials require passing both interactive modular assessments and submitting practical, real-world proof of service or school leadership verified by accredited Nigerian educators.
          </p>
        </div>

        {/* Certificate Modal */}
        {activeCert && (
          <CertificateModal
            certificate={activeCert}
            isOpen={true}
            onClose={() => setActiveCert(null)}
          />
        )}

      </div>
    </div>
  );
};
