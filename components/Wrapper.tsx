"use client";

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "./UserContext";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const userCtx = useContext(UserContext);

  console.log("authenticated user: ", userCtx?.user);

  return (
    <AnimatePresence>
      <motion.div
        className="bg-[#FFFFFF] px-[32px] pb-[32px] min-h-[100vh] sm:px-[50px] w-full sm:w-[460px] sm:mt-[64px] sm:rounded-[8px] sm:shadow sm:min-h-[732px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
