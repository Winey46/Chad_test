"use client";

import { checkRoundedBig } from "@/utils/icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function OnboardingComplete() {
  const { push } = useRouter();

  const handleOk = (): void => {
    push("/signIn");
  };

  return (
    <div className="w-full mt-[112px] flex flex-col items-center gap-[32px]">
      <i>{checkRoundedBig}</i>

      <div className="flex flex-col gap-[8px] items-center">
        <h3 className="font-[500] text-[16px] text-[#134267]">
          You’re ready to go!
        </h3>
        <p className="text-[14px] leading-[21px] text-center">
          Chad doesn’t support mobile browsers. To access your dashboard, login
          from your laptop or desktop computer.
        </p>
        <motion.button
          className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] mt-[16px] hover:text-amber-300"
          onClick={handleOk}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Ok
        </motion.button>
      </div>
    </div>
  );
}
