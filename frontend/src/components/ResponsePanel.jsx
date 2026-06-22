import { Copy, RefreshCcw } from "lucide-react";

const ResponsePanel = ({
  title,
  reply,
  setReply,
  loading,
  onRegenerate,
  onCopy,
  actionColorClass,
  regenerateLabel,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-3">
          <button
            onClick={onRegenerate}
            className={`${actionColorClass} px-4 py-2 rounded-xl flex items-center gap-2`}
          >
            <RefreshCcw size={18} />
            {regenerateLabel}
          </button>
          {reply && (
            <button
              onClick={onCopy}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Copy size={18} />
              Copy
            </button>
          )}
        </div>
      </div>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder={`${title}...`}
        className="w-full h-[450px] bg-[#111827] border border-white/10 rounded-2xl p-5 resize-none focus:outline-none"
      />
    </div>
  );
};

export default ResponsePanel;
