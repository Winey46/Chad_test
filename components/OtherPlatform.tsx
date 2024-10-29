"use client";

import { checkRoundedBig } from "@/utils/icons";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function OtherPlatform() {
  const { push } = useRouter();

  const handleDone = (): void => {
    push("/signIn");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="w-full mt-[112px] flex flex-col items-center gap-[32px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <i>{checkRoundedBig}</i>

        <div className="flex flex-col gap-[8px] items-center">
          <h3 className="font-[500] text-[16px] text-[#134267]">
            Response received
          </h3>
          <p className="text-[14px] leading-[21px] text-center">
            Thank you for your interest in Chad! We’ll be hard at work building
            integrations to support your platform.
          </p>
          <motion.button
            className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] mt-[8px] hover:text-amber-300"
            onClick={handleDone}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Done
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
