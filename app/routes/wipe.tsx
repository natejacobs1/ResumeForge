import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="bg-slate-900 min-h-screen flex items-center justify-center text-red-400">Error: {error}</div>;
  }

  return (
    <div className="bg-slate-900 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-6">Data Management</h1>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <p className="text-gray-300 mb-4">Authenticated as: <span className="text-cyan-400 font-semibold">{auth.user?.username}</span></p>
          <p className="text-gray-300 mb-4">Existing files:</p>
          <div className="flex flex-col gap-3 mb-6">
            {files.map((file) => (
              <div key={file.id} className="flex flex-row gap-4 bg-slate-700 p-3 rounded-lg border border-slate-600">
                <p className="text-gray-200">{file.name}</p>
              </div>
            ))}
          </div>
          <div>
            <button
              className="bg-accent hover:bg-accent-dark text-slate-950 font-semibold px-6 py-3 rounded-lg cursor-pointer transition-all shadow-lg hover:shadow-xl hover:shadow-accent/50"
              onClick={() => handleDelete()}
            >
              Wipe App Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WipeApp;