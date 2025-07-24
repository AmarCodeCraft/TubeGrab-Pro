import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="glass backdrop-blur-2xl mt-auto px-6 py-8 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <p className="text-white/80 font-medium">
          &copy; {new Date().getFullYear()} TubeGrab Pro. Made with{" "}
          <motion.span
            className="text-red-400 inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ❤️
          </motion.span>{" "}
          for video enthusiasts.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
