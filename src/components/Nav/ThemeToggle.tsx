"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button
        onClick={switchTheme}
        className="h-8 w-16 bg-slate-900 rounded-full dark:bg-slate-200"
      >
        <span className="h-[30px] w-[30px] rounded-full duration-300 ease-in-out flex items-center justify-center overflow-hidden translate-x-[1px] bg-white dark:translate-x-[33px] dark:bg-slate-900">
          <AnimatePresence mode="popLayout" initial={false}>
            {theme === "light" && (
              <motion.div
                key={0}
                initial={{ y: 35 }}
                animate={{ y: 0 }}
                exit={{ y: -35 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <SunIcon className="h-5" />
              </motion.div>
            )}

            {theme === "dark" && (
              <motion.div
                key={1}
                initial={{ y: 35 }}
                animate={{ y: 0 }}
                exit={{ y: -35 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MoonIcon className="h-5 text-slate-200" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
