const AnalysisStats = ({ subject, priority, summary }) => {
  const priorityColor =
    priority === "High"
      ? "text-red-400"
      : priority === "Medium"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <p className="text-gray-400 text-sm">Subject</p>
        <h3 className="mt-2 font-semibold">{subject || "—"}</h3>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <p className="text-gray-400 text-sm">Priority</p>
        <h3 className={`mt-2 font-semibold ${priorityColor}`}>{priority}</h3>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <p className="text-gray-400 text-sm">Summary</p>
        <h3 className="mt-2 text-sm">{summary || "—"}</h3>
      </div>
    </div>
  );
};

export default AnalysisStats;
