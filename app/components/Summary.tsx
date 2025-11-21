import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
  const textColor = score > 70 ? 'text-emerald-400'
    : score > 49
      ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-lg text-gray-300">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-lg text-gray-400">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-slate-900 rounded-xl shadow-lg w-full border border-slate-800">
      <div className="flex flex-row items-center p-4 gap-4">
        <ScoreGauge score={feedback.overallScore} />

        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-white">Your Resume Score</h2>
          <p className="text-xs text-gray-400">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Category title="Content" score={feedback.content.score} />
      <Category title="Structure" score={feedback.structure.score} />
      <Category title="Skills" score={feedback.skills.score} />
    </div>
  )
}
export default Summary