import React from 'react'

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine background gradient based on score
  const gradientClass = score > 69
    ? 'from-emerald-900/30'
    : score > 49
      ? 'from-amber-900/30'
      : 'from-red-900/30';

  const borderClass = score > 69
    ? 'border-emerald-700'
    : score > 49
      ? 'border-amber-700'
      : 'border-red-700';

  // Determine icon based on score
  const iconSrc = score > 69
    ? '/icons/ats-good.svg'
    : score > 49
      ? '/icons/ats-warning.svg'
      : '/icons/ats-bad.svg';

  // Determine subtitle based on score
  const subtitle = score > 69
    ? 'Great Job!'
    : score > 49
      ? 'Good Start'
      : 'Needs Improvement';

  return (
    <div className={`bg-gradient-to-b ${gradientClass} to-slate-900 rounded-lg shadow-lg w-full p-6 border ${borderClass}`}>
      {/* Top section with icon and headline */}
      <div className="flex items-center gap-4 mb-4">
        <img src={iconSrc} alt="ATS Score Icon" className="w-10 h-10" />
        <div>
          <h2 className="text-lg font-bold text-white">ATS Score - {score}/100</h2>
        </div>
      </div>

      {/* Description section */}
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2 text-gray-200">{subtitle}</h3>
        <p className="text-gray-400 mb-3 text-sm">
          This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
        </p>

        {/* Suggestions list */}
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-4 h-4 mt-1"
              />
              <p className={`text-sm ${suggestion.type === "good" ? "text-emerald-300" : "text-amber-300"}`}>
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing encouragement */}
      <p className="text-gray-400 italic text-sm">
        Keep refining your resume to improve your chances of getting past ATS filters and into the hands of recruiters.
      </p>
    </div>
  )
}

export default ATS