import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import DownloadForm from "./components/DownloadForm";
import VideoInfo from "./components/VideoInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingParticles from "./components/FloatingParticles";
import Routing from "./routes/Routing";

function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHomePage, setShowHomePage] = useState(true);

  // Function to determine if we should show the home page content
  const MainContent = () => {
    const location = useLocation();

    useEffect(() => {
      setShowHomePage(location.pathname === "/");
    }, [location]);

    return null;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <MainContent />
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent -z-10"></div>
        <FloatingParticles />
        <Header />

        <Routing />

        {showHomePage && (
          <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl relative z-10">
            <DownloadForm
              setVideoInfo={setVideoInfo}
              setLoading={setLoading}
              setError={setError}
            />

            <AnimatePresence>
              {loading && (
                <div className="glass-card p-8 text-center my-8 pulse-glow">
                  <div className="w-16 h-16 border-4 border-white/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white text-lg font-medium">
                    Fetching video information...
                  </p>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {error && (
                <div className="glass-card border-red-500/50 bg-red-500/10 p-6 my-8 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse">
                    !
                  </div>
                  <p className="text-red-100 font-medium">{error}</p>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {videoInfo && <VideoInfo videoInfo={videoInfo} />}
            </AnimatePresence>
          </main>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
