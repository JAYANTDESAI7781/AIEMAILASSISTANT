import { Mail, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-2xl">
            <Mail size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Email Assistant</h1>
            <p className="text-sm text-gray-400">Smart AI Productivity Platform</p>
          </div>
        </div>
        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm">
          <Sparkles size={16} />
          AI Active
        </div>
      </div>
    </div>
  );
};

export default Navbar;
