import React from 'react';

interface AiSummaryProps {
  summary: string;
}

const AiSummary: React.FC<AiSummaryProps> = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="w-full p-4 bg-purple-50 rounded-xl border border-purple-200">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-purple-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l.707.707m12.728 0l-.707.707M12 21v-1" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
        AI Summary
      </h3>
      <p className="text-gray-700 leading-relaxed">{summary}</p>
    </div>
  );
};

export default AiSummary;