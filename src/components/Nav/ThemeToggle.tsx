"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<string>();

  useEffect(() => {
    setThemeValue(theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const variants = {
    initial: {
      y: 35,
    },
    animate: {
      y: 0,
    },
    exit: {
      y: -35,
    },
  };

  return (
    <div>
      <button
        onClick={switchTheme}
        className="h-8 w-16 bg-slate-900 rounded-full dark:bg-slate-200 ring-1 ring-slate-200 dark:ring-slate-700"
      >
        <span className="h-[30px] w-[30px] rounded-full duration-300 ease-in-out flex items-center justify-center overflow-hidden translate-x-[1px] bg-white dark:translate-x-[33px] dark:bg-slate-900">
          <AnimatePresence mode="popLayout" initial={false}>
            {themeValue === "light" && (
              <motion.span
                variants={variants}
                key={0}
                initial={variants.initial}
                animate={variants.animate}
                exit={variants.exit}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <SunIcon className="w-5" />
              </motion.span>
            )}
            {themeValue === "dark" && (
              <motion.span
                key={1}
                initial={variants.initial}
                animate={variants.animate}
                exit={variants.exit}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MoonIcon className="w-5 text-slate-200" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
