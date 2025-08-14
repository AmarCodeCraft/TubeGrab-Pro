import React, { useState } from "react";
import { motion } from "framer-motion";

function Support() {
  const [activeTab, setActiveTab] = useState("faq");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormSubmitted(false);
    }, 5000);
  };

  const faqs = [
    {
      question: "How do I download a YouTube video?",
      answer:
        "Simply paste the YouTube video URL into the search box on our homepage, select your desired format and quality, then click the download button. The video will start downloading automatically.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "TubeGrab Pro supports various formats including MP4, WebM, 3GP for video, and MP3, WAV, AAC for audio. You can choose the format that best suits your needs.",
    },
    {
      question: "Is there a limit to how many videos I can download?",
      answer:
        "No, there's no limit to the number of videos you can download with TubeGrab Pro. Download as many as you want!",
    },
    {
      question: "Can I download age-restricted videos?",
      answer:
        "Yes, TubeGrab Pro can download most age-restricted videos without requiring you to sign in to a Google account.",
    },
    {
      question: "Is it legal to download YouTube videos?",
      answer:
        "Downloading videos for personal use is generally acceptable, but redistributing copyrighted content is not. Always respect copyright laws and terms of service.",
    },
    {
      question: "Why is my download speed slow?",
      answer:
        "Download speeds depend on your internet connection, server load, and the size of the video. For best results, use a stable internet connection and try downloading during off-peak hours.",
    },
    {
      question: "Can I download videos from platforms other than YouTube?",
      answer:
        "Yes, TubeGrab Pro supports multiple platforms including Vimeo, Facebook, Instagram, Twitter, and many more.",
    },
    {
      question: "How do I extract only the audio from a video?",
      answer:
        "Simply paste the video URL, then select an audio format like MP3 or WAV from the format options. The tool will extract only the audio track.",
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
            <span className="text-gradient">Support Center</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            Get help with TubeGrab Pro. Browse our FAQs, tutorials, or contact
            our support team.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="glass-card p-1 rounded-full mb-10 max-w-md mx-auto">
          <div className="flex">
            <button
              onClick={() => handleTabChange("faq")}
              className={`flex-1 py-3 px-6 rounded-full text-center transition-all duration-300 ${
                activeTab === "faq"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                  : "text-white/70 hover:text-white"
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => handleTabChange("contact")}
              className={`flex-1 py-3 px-6 rounded-full text-center transition-all duration-300 ${
                activeTab === "contact"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl"
              >
                <h3 className="text-white text-lg font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Contact Form Section */}
        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-2xl max-w-2xl mx-auto"
          >
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/70">
                  Thank you for contacting us. We'll get back to you as soon as
                  possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-glass w-full py-3 px-4"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-glass w-full py-3 px-4"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-glass w-full py-3 px-4"
                    placeholder="Help with downloading"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="input-glass w-full py-3 px-4 resize-none"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary py-3 px-8 w-full"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        )}

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="text-gradient">Additional Resources</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">User Guide</h3>
              <p className="text-white/70 mb-4">
                Detailed instructions on how to use all features of TubeGrab
                Pro.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
              >
                Read Guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                Video Tutorials
              </h3>
              <p className="text-white/70 mb-4">
                Watch step-by-step tutorials on how to get the most out of
                TubeGrab Pro.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
              >
                Watch Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                Knowledge Base
              </h3>
              <p className="text-white/70 mb-4">
                Find solutions to common problems in our extensive knowledge
                base.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
              >
                Browse Articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Have Questions?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Our support team is ready to help you with any issues or questions
              you might have. We typically respond within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTabChange("contact")}
              className="btn-primary py-4 px-10 text-lg"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Support;
