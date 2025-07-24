import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function VideoInfo({ videoInfo }) {
  const [format, setFormat] = useState("highest");
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setDownloading(true);
    setDownloadProgress(0);
    setError(null);

    try {
      // Start with a small initial progress to show the download is starting
      setTimeout(() => setDownloadProgress(1), 300);

      // Show some initial progress before actual download starts
      const progressTimer = setInterval(() => {
        setDownloadProgress((prev) => Math.min(prev + 0.5, 10));
      }, 100);

      const response = await axios({
        url: `http://localhost:5000/api/download?url=${encodeURIComponent(
          videoInfo.url
        )}&format=${format}`,
        method: "GET",
        responseType: "blob",
        timeout: 0, // No timeout for large downloads
        maxBodyLength: Infinity, // No limit on response size
        headers: {
          "Cache-Control": "no-cache", // Prevent caching issues
        },
        onDownloadProgress: (progressEvent) => {
          // Clear the initial timer once real progress starts
          clearInterval(progressTimer);

          const total = progressEvent.total;
          const loaded = progressEvent.loaded;

          // Make sure we have proper progress values
          if (total && loaded) {
            // Calculate percentage - with smoother updates for better UX
            const percentCompleted = Math.min(
              98,
              Math.round((loaded * 100) / total)
            );

            // Ensure progress is smooth and never decreases
            setDownloadProgress((prevProgress) => {
              // Only update if it's at least 1% more than current progress
              // This prevents too many small updates that can cause UI jitter
              if (percentCompleted > prevProgress + 1) {
                return percentCompleted;
              } else if (prevProgress < 95) {
                // Ensure some visible progress even for slow connections
                return prevProgress + 0.2;
              }
              return prevProgress;
            });
          } else {
            // If we don't have total, simulate gradual progress
            setDownloadProgress((prevProgress) => {
              // Cap at 90% until actual download complete for simulated progress
              return Math.min(90, prevProgress + 0.5);
            });
          }
        },
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Set filename based on format
      const extension = format === "audio" ? "mp3" : "mp4";
      const filename = `${videoInfo.title
        .replace(/[^\w\s-]/gi, "")
        .trim()}.${extension}`;
      link.setAttribute("download", filename);

      // Show 100% completion before initiating download
      setDownloadProgress(100);

      // Short delay to show 100% completion before initiating download
      await new Promise((resolve) => setTimeout(resolve, 800));

      document.body.appendChild(link);
      link.click();
      link.remove();

      // Clean up blob URL
      window.URL.revokeObjectURL(url);

      // Keep showing 100% for a moment before resetting
      setTimeout(() => {
        setDownloading(false);
        setDownloadProgress(0);
      }, 1500);
    } catch (error) {
      console.error("Download failed:", error);
      setError(
        "Download failed. Please try again or check your internet connection."
      );
      setDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <motion.div
      className="glass-card overflow-hidden mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Video Details */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={videoInfo.thumbnail}
              alt={videoInfo.title}
              className="w-full lg:w-80 h-48 lg:h-45 object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-sm font-medium">
              {videoInfo.duration}
            </div>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.h3
            className="text-2xl font-bold text-white mb-3 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {videoInfo.title}
          </motion.h3>

          <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="font-medium">{videoInfo.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span className="font-medium">{videoInfo.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Controls */}
      <div className="bg-white/5 backdrop-blur-sm p-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col space-y-2">
            <label className="text-white/80 font-medium text-sm">
              Select Format:
            </label>
            <div className="relative">
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="input-glass min-w-[200px] appearance-none cursor-pointer pr-10"
              >
                <option value="highest" className="bg-gray-800 text-white">
                  HD Quality (1080p)
                </option>
                <option value="lowest" className="bg-gray-800 text-white">
                  SD Quality (480p)
                </option>
                <option value="audio" className="bg-gray-800 text-white">
                  Audio Only (MP3)
                </option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleDownload}
            disabled={downloading}
            className={`btn-primary px-8 py-4 font-bold text-lg min-w-[200px] flex items-center justify-center space-x-2 ${
              downloading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            whileHover={!downloading ? { scale: 1.05 } : {}}
            whileTap={!downloading ? { scale: 0.95 } : {}}
          >
            {downloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Downloading... {downloadProgress}%</span>
              </>
            ) : (
              <>
                <span>Download Now</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </div>

        {/* Progress Bar */}
        <AnimatePresence>
          {downloading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${downloadProgress}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <motion.div
                      className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </motion.div>
                </div>
                <motion.span
                  className="text-white font-bold text-sm min-w-[50px] text-center"
                  key={downloadProgress}
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {downloadProgress}%
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 flex items-center space-x-3"
            >
              <svg
                className="w-6 h-6 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <span className="text-red-100 font-medium">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default VideoInfo;
