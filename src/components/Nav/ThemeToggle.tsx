"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOn(!isOn)}
        className="h-8 w-16 bg-slate-900 rounded-full ring-1 ring-slate-200"
      >
        <span
          className={clsx(
            "bg-white h-[30px] w-[30px] rounded-full duration-300 ease-in-out flex items-center justify-center overflow-hidden",
            isOn ? "translate-x-[33px]" : "translate-x-[1px]"
          )}
        >
          <AnimatePresence mode="popLayout" initial={true}>
            {!isOn && (
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

            {isOn && (
              <motion.div
                key={1}
                initial={{ y: 35 }}
                animate={{ y: 0 }}
                exit={{ y: -35 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <MoonIcon className="h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
