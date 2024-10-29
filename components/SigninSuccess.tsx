"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { motion, AnimatePresence } from "framer-motion";

export default function SigninSuccess() {
  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  const handleOk = (): void => push("/signIn");

  return (
    <AnimatePresence>
      <motion.div
        className="w-full mt-[112px] flex flex-col items-center gap-[32px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/raccoon.png"
          alt="raccoon_logo"
          width={80}
          height={80}
        />

        <div className="flex flex-col gap-[8px] items-center">
          <h3 className="font-[500] text-[16px] text-[#134267]">
            Use your desktop to access Chad
          </h3>
          <p className="text-[14px] leading-[21px] text-center">
            Chad doesn’t support mobile browsers. To access your dashboard,
            login from your laptop or desktop computer.
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
          <p className="self-center text-[12px]">
            Not {userCtx?.user?.email}?{" "}
            <Link href="#" className="text-[#32ABF2] hover:text-amber-300">
              Logout
            </Link>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
