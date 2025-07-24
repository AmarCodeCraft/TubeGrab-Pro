import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DownloadForm from "./components/DownloadForm";
import VideoInfo from "./components/VideoInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingParticles from "./components/FloatingParticles";

function App() {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent -z-10"></div>
      <FloatingParticles />
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DownloadForm
            setVideoInfo={setVideoInfo}
            setLoading={setLoading}
            setError={setError}
          />
        </motion.div>

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="glass-card p-8 text-center my-8 pulse-glow"
            >
              <div className="w-16 h-16 border-4 border-white/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium">
                Fetching video information...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="glass-card border-red-500/50 bg-red-500/10 p-6 my-8 flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold animate-pulse">
                !
              </div>
              <p className="text-red-100 font-medium">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {videoInfo && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <VideoInfo videoInfo={videoInfo} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
