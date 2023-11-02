import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-4 rounded-full mx-auto">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-black dark:text-white">Form Progress</span>
        <span className="text-sm font-medium text-black dark:text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div className="bg-slate-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
