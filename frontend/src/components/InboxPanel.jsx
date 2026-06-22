import { Reply } from "lucide-react";

const InboxPanel = ({
  emails,
  selectedEmail,
  setSelectedEmail,
  generateReply,
  loading,
}) => {
  return (
    <div>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <h2 className="text-3xl font-bold mb-6">Inbox</h2>
        <div className="space-y-4">
          {emails.map((email, index) => (
            <div
              key={index}
              onClick={() => setSelectedEmail(email.message)}
              className="bg-[#111827] border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-blue-500"
            >
              <h3 className="font-semibold text-lg">{email.sender}</h3>
              <p className="text-gray-400 mt-1">{email.subject}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-6">
        <textarea
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
          placeholder="Selected email..."
          className="w-full h-56 bg-[#111827] border border-white/10 rounded-2xl p-5 resize-none focus:outline-none"
        />
        <button
          onClick={generateReply}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Reply size={18} />
          {loading ? "Generating..." : "Generate Reply"}
        </button>
      </div>
    </div>
  );
};

export default InboxPanel;
