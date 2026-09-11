import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center p-4">
      {/* Background Ambient Glows & Geometric Anchors */}
      <div className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-[#FFB703]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-72 h-72 rounded-full bg-[#0D2745] blur-2xl pointer-events-none" />

      {/* Main SVG Composition */}
      <svg
        viewBox="0 0 560 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl select-none"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC837" />
            <stop offset="100%" stopColor="#FF8008" />
          </linearGradient>

          <linearGradient id="navyCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D2745" />
            <stop offset="100%" stopColor="#081D35" />
          </linearGradient>

          <linearGradient id="badgeGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD000" />
            <stop offset="100%" stopColor="#FF9F00" />
          </linearGradient>

          <pattern id="gridPattern" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.07" />
          </pattern>
        </defs>

        {/* Backdrop Grid Panel */}
        <rect x="40" y="30" width="480" height="420" rx="28" fill="url(#navyCardGrad)" stroke="#1E3A5F" strokeWidth="1.5" />
        <rect x="40" y="30" width="480" height="420" rx="28" fill="url(#gridPattern)" />

        {/* Concentric Compass Leadership Circles (Geometric) */}
        <circle cx="280" cy="220" r="180" stroke="#FFB703" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 6" />
        <circle cx="280" cy="220" r="130" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx="280" cy="220" r="80" stroke="#FFB703" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Orbiting Gold & Navy Accent Nodes */}
        <circle cx="430" cy="120" r="14" fill="url(#goldGrad)" />
        <circle cx="430" cy="120" r="22" stroke="#FFB703" strokeWidth="1.5" strokeOpacity="0.5" />

        <circle cx="110" cy="290" r="10" fill="#FFB703" fillOpacity="0.8" />
        <circle cx="460" cy="320" r="8" fill="#159A6C" />

        {/* Stylized Floating Badge 1: 14 Powers */}
        <g transform="translate(60, 60)">
          <rect width="130" height="52" rx="14" fill="#071B33" stroke="#FFB703" strokeWidth="1.5" />
          <circle cx="26" cy="26" r="14" fill="url(#badgeGold)" />
          <path d="M22 26L25 29L31 22" stroke="#071B33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="24" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Sora">14 POWERS</text>
          <text x="48" y="38" fill="#FFB703" fontSize="9" fontWeight="600" fontFamily="Inter">Active Curriculum</text>
        </g>

        {/* Stylized Floating Badge 2: Real-World Evidence */}
        <g transform="translate(370, 370)">
          <rect width="135" height="50" rx="14" fill="#071B33" stroke="#2563EB" strokeWidth="1.5" />
          <rect x="12" y="14" width="22" height="22" rx="6" fill="#1E3A5F" />
          <path d="M19 25L23 29L28 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="42" y="27" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Sora">VERIFIED EVIDENCE</text>
          <text x="42" y="40" fill="#94A3B8" fontSize="8.5" fontWeight="500" fontFamily="Inter">School & Mentor Signoff</text>
        </g>

        {/* Center Work Table / Collaboration Platform */}
        <ellipse cx="280" cy="380" rx="170" ry="40" fill="#0A223E" stroke="#1E3A5F" strokeWidth="2" />
        <ellipse cx="280" cy="378" rx="140" ry="28" fill="#0F2B4C" />

        {/* Student 1 (Left - Female Leader with Braids & Blazer) */}
        <g transform="translate(140, 160)">
          {/* Shadow */}
          <ellipse cx="45" cy="210" rx="35" ry="10" fill="#051426" opacity="0.6" />
          {/* Blazer & Collar */}
          <path d="M20 120 C20 95, 70 95, 70 120 L75 200 L15 200 Z" fill="#0B2340" />
          <path d="M35 120 L45 155 L55 120" stroke="#FFB703" strokeWidth="2" fill="#FFFFFF" />
          {/* Gold Tie / Badge */}
          <polygon points="43,150 47,150 49,180 45,188 41,180" fill="url(#goldGrad)" />
          {/* Head & Stylized Braids */}
          <ellipse cx="45" cy="75" rx="20" ry="24" fill="#7C4A27" />
          {/* Hair Bun / Braids Silhouette */}
          <circle cx="45" cy="50" r="16" fill="#1C140E" />
          <path d="M26 68 C26 50, 64 50, 64 68 C64 62, 26 62, 26 68" fill="#1C140E" />
          {/* Glasses / Confident Brow */}
          <rect x="36" y="70" width="18" height="6" rx="2" stroke="#FFB703" strokeWidth="1" fill="none" opacity="0.8" />
          {/* Arm holding stylus / notebook */}
          <path d="M68 135 L95 165 L85 175 L60 150" fill="#0B2340" />
          <rect x="90" y="160" width="22" height="16" rx="3" fill="#F8FAFC" transform="rotate(15 90 160)" />
        </g>

        {/* Student 2 (Center - Collaborative Visionary with Tablet) */}
        <g transform="translate(235, 140)">
          {/* Shadow */}
          <ellipse cx="45" cy="230" rx="40" ry="12" fill="#051426" opacity="0.7" />
          {/* Shoulders & School Uniform */}
          <path d="M15 130 C15 105, 75 105, 75 130 L82 220 L8 220 Z" fill="#081E38" stroke="#1D3E66" strokeWidth="1" />
          {/* White Shirt Collar with Gold Pin */}
          <path d="M34 130 L45 150 L56 130" fill="#FFFFFF" />
          <circle cx="45" cy="155" r="3" fill="#FFB703" />
          {/* Head */}
          <ellipse cx="45" cy="85" rx="21" ry="25" fill="#5C3417" />
          {/* Fade Hairline */}
          <path d="M24 82 C24 60, 66 60, 66 82 C60 66, 30 66, 24 82" fill="#110B08" />
          {/* Glowing Digital Learning Slate / Tablet */}
          <g transform="translate(20, 185)">
            <rect width="50" height="34" rx="4" fill="#071B33" stroke="#FFB703" strokeWidth="1.5" />
            <rect x="4" y="4" width="42" height="26" rx="2" fill="#132B4A" />
            {/* Screen Charts / Bar indicator */}
            <rect x="8" y="18" width="6" height="8" rx="1" fill="#FFB703" />
            <rect x="18" y="12" width="6" height="14" rx="1" fill="#38BDF8" />
            <rect x="28" y="8" width="6" height="18" rx="1" fill="#159A6C" />
            <line x1="8" y1="24" x2="38" y2="24" stroke="#64748B" strokeWidth="1" />
          </g>
        </g>

        {/* Student 3 (Right - Engaged Student with Presentation Pose) */}
        <g transform="translate(330, 165)">
          {/* Shadow */}
          <ellipse cx="45" cy="205" rx="35" ry="10" fill="#051426" opacity="0.6" />
          {/* Blazer */}
          <path d="M20 115 C20 90, 70 90, 70 115 L78 195 L12 195 Z" fill="#0B2340" />
          <path d="M36 115 L45 145 L54 115" stroke="#FFB703" strokeWidth="1.5" fill="#FFFFFF" />
          {/* Head */}
          <ellipse cx="45" cy="72" rx="20" ry="24" fill="#6A3B1B" />
          {/* Hair */}
          <path d="M25 70 C25 50, 65 50, 65 70 C60 56, 30 56, 25 70" fill="#120D08" />
          {/* Gesturing Hand Pointing forward */}
          <path d="M25 130 L-5 155 L2 165 L30 142" fill="#0B2340" />
          <circle cx="-5" cy="158" r="5" fill="#6A3B1B" />
        </g>

        {/* Inspiring Gold Rays & Leadership Geometry */}
        <line x1="280" y1="40" x2="280" y2="70" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />
        <line x1="390" y1="75" x2="370" y2="95" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />
        <line x1="170" y1="75" x2="190" y2="95" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />

        {/* Small floating motto chip */}
        <g transform="translate(195, 415)">
          <rect width="170" height="28" rx="14" fill="#071B33" stroke="#FFB703" strokeWidth="1" />
          <circle cx="16" cy="14" r="5" fill="#FFB703" />
          <text x="28" y="18" fill="#F8FAFC" fontSize="9.5" fontWeight="700" fontFamily="Inter">
            LEADERSHIP THROUGH PRACTICE
          </text>
        </g>
      </svg>
    </div>
  );
};
