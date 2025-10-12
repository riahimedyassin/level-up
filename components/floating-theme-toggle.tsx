"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import * as React from "react";

export function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icons */}
      <Sun className="h-6 w-6 text-primary rotate-0 scale-100 transition-all duration-500 dark:-rotate-180 dark:scale-0 relative z-10" />
      <Moon className="absolute h-6 w-6 text-accent rotate-180 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 z-10" />

      {/* Animated ring */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
