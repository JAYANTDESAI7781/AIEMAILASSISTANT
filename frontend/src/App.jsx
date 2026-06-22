import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ModeTabs from "./components/ModeTabs";
import EmailWriter from "./components/EmailWriter";
import AnalysisStats from "./components/AnalysisStats";
import ResponsePanel from "./components/ResponsePanel";
import InboxPanel from "./components/InboxPanel";

const templates = [
  "Leave Request",
  "Internship Application",
  "Meeting Request",
  "Follow-up Email",
  "Apology Email",
];

const emails = [
  {
    sender: "Google HR",
    subject: "Interview Scheduled Tomorrow",
    message: "Hello Jayant, your interview is scheduled tomorrow at 10 AM.",
  },
  {
    sender: "Amazon Rewards",
    subject: "Win Free iPhone",
    message: "Congratulations! Click here now to claim your free iPhone.",
  },
  {
    sender: "College TPO",
    subject: "Placement Drive Update",
    message: "Placement drive starts Monday in auditorium.",
  },
];

const App = () => {
  const [mode, setMode] = useState("writer");
  const [prompt, setPrompt] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [tone, setTone] = useState("Professional");
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const [priority, setPriority] = useState("Medium");

  const generateEmail = async () => {
    if (!prompt.trim()) {
      alert("Please enter prompt.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/analyze", {
        email: prompt,
        tone,
      });

      setReply(response.data.reply);
      setSubject(prompt.length > 25 ? prompt.substring(0, 25) + "..." : prompt);
      setSummary("AI generated professional email draft.");
      setPriority("Medium");
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
    setLoading(false);
  };

  const generateReply = async () => {
    if (!selectedEmail.trim()) {
      alert("Please select email.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/analyze", {
        email: selectedEmail,
        tone,
      });

      setReply(response.data.reply);
      setSummary("Interview related email requiring user attention.");
      setSubject("Re: Interview Scheduled");
      setPriority("High");
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
    setLoading(false);
  };

  const copyReply = () => {
    navigator.clipboard.writeText(reply);
    alert("Copied!");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <ModeTabs
          mode={mode}
          setMode={(nextMode) => {
            setMode(nextMode);
            setReply("");
          }}
        />

        {mode === "writer" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <EmailWriter
              prompt={prompt}
              setPrompt={setPrompt}
              tone={tone}
              setTone={setTone}
              attachment={attachment}
              setAttachment={setAttachment}
              templates={templates}
              generateEmail={generateEmail}
              loading={loading}
            />

            <div className="space-y-5">
              <AnalysisStats subject={subject} priority={priority} summary={summary} />
              <ResponsePanel
                title="Generated Email"
                reply={reply}
                setReply={setReply}
                loading={loading}
                onRegenerate={generateEmail}
                onCopy={copyReply}
                actionColorClass="bg-blue-600 hover:bg-blue-700"
                regenerateLabel="Regenerate"
              />
            </div>
          </div>
        )}

        {mode === "reply" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <InboxPanel
              emails={emails}
              selectedEmail={selectedEmail}
              setSelectedEmail={setSelectedEmail}
              generateReply={generateReply}
              loading={loading}
            />

            <div className="space-y-5">
              <AnalysisStats subject={subject} priority={priority} summary={summary} />
              <ResponsePanel
                title="AI Generated Reply"
                reply={reply}
                setReply={setReply}
                loading={loading}
                onRegenerate={generateReply}
                onCopy={copyReply}
                actionColorClass="bg-purple-600 hover:bg-purple-700"
                regenerateLabel="Regenerate"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
