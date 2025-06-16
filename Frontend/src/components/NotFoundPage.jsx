import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // If not using shadcn/ui, replace with a basic <button>

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-green-900 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-center"
      >
        <motion.h1
          className="text-7xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🌱 404 🌿
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Oops! Page not found 💚
        </motion.h2>

        <motion.p
          className="text-lg max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          This little green corner of the internet doesn't exist. But don’t
          worry — let’s get you back to the garden 🌼
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-2xl text-lg shadow-lg"
          >
            🌿 Take Me Home
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 text-5xl"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        🍃✨🌼🌱🌸
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
