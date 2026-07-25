"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/constants/site";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          aria-hidden={!visible}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background font-display text-xl font-bold text-primary">
                {SITE.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </motion.div>
            <motion.p
              className="font-display text-sm tracking-[0.3em] text-subtext uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
