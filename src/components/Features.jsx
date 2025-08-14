import React from "react";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "High Quality Downloads",
      description:
        "Download videos in up to 4K resolution with crystal clear quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
    },
    {
      title: "Multiple Formats",
      description:
        "Choose from various formats including MP4, MP3, WebM, and more.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Audio Extraction",
      description: "Extract audio tracks from videos for music and podcasts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      title: "No Ads or Watermarks",
      description: "Clean downloads without any advertisements or watermarks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
    },
    {
      title: "Batch Processing",
      description: "Download multiple videos at once to save time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="8" height="8" />
          <rect x="14" y="2" width="8" height="8" />
          <rect x="2" y="14" width="8" height="8" />
          <rect x="14" y="14" width="8" height="8" />
        </svg>
      ),
    },
    {
      title: "Fast Downloads",
      description: "Advanced algorithms ensure maximum download speeds.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Powerful Features</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            TubeGrab Pro comes with a suite of powerful features designed to
            make your downloading experience seamless and enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6 shadow-lg pulse-glow">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 glass-card p-10 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient">Advanced Technology</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Adaptive stream selection for best quality",
                  "Smart bandwidth management",
                  "Resumable downloads if interrupted",
                  "Automatic format detection",
                  "Browser extension integration",
                  "Real-time progress tracking",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-white/80"
                  >
                    <div className="mr-3 text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-8 py-3 px-8"
              >
                Try It Now
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 p-1 rounded-2xl shadow-xl">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4">
                  <div className="flex space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="h-64 overflow-hidden rounded-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-16 h-16 border-4 border-white/30 border-t-purple-400 rounded-full animate-spin"></div>
                      <div className="mt-4 text-purple-300 font-mono text-sm">
                        Downloading at 12.8 MB/s
                      </div>
                      <div className="w-3/4 h-3 bg-white/10 rounded-full mt-4 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-full w-2/3 rounded-full"></div>
                      </div>
                      <div className="text-white/70 text-xs mt-2">
                        67% Complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-gradient">What Our Users Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "The best YouTube downloader I've ever used. Fast, reliable, and super easy to use!",
                name: "Alex J.",
                role: "Content Creator",
              },
              {
                text: "I love how I can choose between different quality options. Perfect for my podcast needs!",
                name: "Sarah M.",
                role: "Podcast Producer",
              },
              {
                text: "Finally a downloader that doesn't bombard me with ads. Clean interface and fast downloads.",
                name: "Michael T.",
                role: "Music Producer",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl"
              >
                <svg
                  className="w-10 h-10 text-purple-400 mb-4 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-white/80 italic mb-6">{testimonial.text}</p>
                <div className="text-white font-medium">{testimonial.name}</div>
                <div className="text-purple-400 text-sm">
                  {testimonial.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Start Downloading?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Experience the power of TubeGrab Pro right now. No registration
              required, just paste your URL and start downloading.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary py-4 px-10 text-lg"
            >
              Try It Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
