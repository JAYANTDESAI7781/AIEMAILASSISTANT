import { Paperclip, Send } from "lucide-react";

const EmailWriter = ({
  prompt,
  setPrompt,
  tone,
  setTone,
  attachment,
  setAttachment,
  templates,
  generateEmail,
  loading,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h2 className="text-3xl font-bold mb-6">AI Email Writer</h2>
      <div className="flex gap-3 flex-wrap mb-5">
        {templates.map((temp, index) => (
          <button
            key={index}
            onClick={() => setPrompt(temp)}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm"
          >
            {temp}
          </button>
        ))}
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your email request..."
        className="w-full h-72 bg-[#111827] border border-white/10 rounded-2xl p-5 resize-none focus:outline-none"
      />
      <div className="mt-4 flex items-center gap-4 flex-wrap">
        <label className="bg-white/10 hover:bg-white/20 transition px-5 py-3 rounded-2xl cursor-pointer flex items-center gap-2 border border-white/10">
          <Paperclip size={18} />
          Attach File
          <input
            type="file"
            hidden
            onChange={(e) => setAttachment(e.target.files[0])}
          />
        </label>
        {attachment && (
          <p className="text-sm text-green-400">{attachment.name}</p>
        )}
      </div>
      <div className="mt-5">
        <label className="block mb-2 text-gray-400">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4"
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Formal</option>
          <option>Apology</option>
          <option>Follow-up</option>
        </select>
      </div>
      <button
        onClick={generateEmail}
        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
      >
        <Send size={18} />
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </div>
  );
};

export default EmailWriter;
