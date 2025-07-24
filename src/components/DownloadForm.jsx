import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function DownloadForm({ setVideoInfo, setLoading, setError }) {
  const [url, setUrl] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    setError(null);
    setVideoInfo(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/video-info",
        { url }
      );
      setVideoInfo(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch video information"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Download YouTube Videos
          <span className="block text-gradient">In High Quality</span>
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Enter a YouTube URL to download videos in various formats with
          lightning speed
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className={`glass-card p-6 transition-all duration-300 ${
            isInputFocused ? "scale-105 shadow-2xl" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Paste YouTube URL here (e.g., https://www.youtube.com/watch?v=...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                className="input-glass w-full pl-14 pr-4 py-4 text-lg"
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary px-8 py-4 text-lg font-bold min-w-[160px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download</span>
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7M5 18h14"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.form>

      <motion.div
        className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="text-white/70 font-medium">Supported formats:</span>
        <div className="flex space-x-3">
          {["MP4", "Audio", "HD"].map((format, index) => (
            <motion.span
              key={format}
              className="format-tag"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {format}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default DownloadForm;
