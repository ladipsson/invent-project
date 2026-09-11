import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'navy' | 'green';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  size = 'md',
  variant = 'gold',
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  const fillColors = {
    gold: 'bg-gradient-to-r from-[#FFB703] to-[#F9A900]',
    navy: 'bg-[#071B33]',
    green: 'bg-[#159A6C]'
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
          {label && <span>{label}</span>}
          {showPercentage && <span className="font-bold text-[#071B33] ml-auto">{clamped}%</span>}
        </div>
      )}
      <div 
        className={`w-full bg-slate-200/80 rounded-full overflow-hidden ${heightClasses[size]}`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${fillColors[variant]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
