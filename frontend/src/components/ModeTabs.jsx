import { PenSquare, Reply } from "lucide-react";

const ModeTabs = ({ mode, setMode }) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => setMode("writer")}
        className={`px-6 py-3 rounded-2xl flex items-center gap-2 ${
          mode === "writer" ? "bg-blue-600" : "bg-white/10"
        }`}
      >
        <PenSquare size={18} />
        AI Email Writer
      </button>
      <button
        onClick={() => setMode("reply")}
        className={`px-6 py-3 rounded-2xl flex items-center gap-2 ${
          mode === "reply" ? "bg-purple-600" : "bg-white/10"
        }`}
      >
        <Reply size={18} />
        AI Email Reply
      </button>
    </div>
  );
};

export default ModeTabs;
