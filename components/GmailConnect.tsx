"use client";

import { chevronLight, chevronDark, check, gLogo } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { motion } from "framer-motion";

export default function GmailConnect() {
  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  const handlePrevPage = (): void => {
    push("/signUp/shopify");
  };

  const handleNextPage = (): void => {
    push("/onboardingComplete");
  };

  const handleConnectGmail = (): void => {
    userCtx?.setUser({
      name: userCtx?.user?.name,
      email: userCtx?.user?.email,
      store: userCtx?.user?.store,
      gmail: true,
      password: userCtx?.user?.password,
    });

    push("/onboardingComplete");
  };

  return (
    <main className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[12px]">Step 3 of 4</p>
        <span className="flex h-[8px] border-[1px] border-[#C9D3E0] rounded-[4px]">
          <span className="h-full w-[75%] bg-[#C9D3E0]"></span>
        </span>
        <div className="w-full flex justify-between">
          <button
            className="flex items-center text-[12px] px-[8px] hover:text-amber-300"
            onClick={handlePrevPage}
          >
            <i>{chevronDark}</i>Prev
          </button>
          <button
            className={
              userCtx?.user?.gmail
                ? "flex items-center text-[12px] px-[8px]hover:text-amber-300"
                : "flex items-center text-[12px] px-[8px] text-[#C3CAD5]"
            }
            onClick={handleNextPage}
            disabled={!userCtx?.user?.gmail}
          >
            Next<i className="rotate-180">{chevronLight}</i>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h2 className="font-[600] text-[24px] leading-[28.8px] text-[#134267]">
          Connect to customer support email
        </h2>
        <p className="text-[14px] leading-[21px]">
          Allows Chad to send automated responses on your behalf from your usual
          support mailbox
        </p>
      </div>

      <ul className="flex flex-col w-full bg-[#F8F9FC] p-[16px] gap-[16px] rounded-[8px]">
        <li className="flex gap-[4px]">
          <i className="w-[24px]">{check}</i>
          <div className="">
            <p className="text-[14px] font-[500] text-[#134267]">
              Contextual responses
            </p>
            <p className="text-[12px]">
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </p>
          </div>
        </li>
        <li className="flex gap-[4px]">
          <i>{check}</i>
          <div>
            <p className="text-[14px] font-[500] text-[#134267]">
              Reply from anywhere
            </p>
            <p className="text-[12px]">
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </p>
          </div>
        </li>
        <li className="flex gap-[4px]">
          <i>{check}</i>
          <div>
            <p className="text-[14px] font-[500] text-[#134267]">
              Categorical inbox tags
            </p>
            <p className="text-[12px]">
              Tags your emails by category so you know what to expect before
              even opening an email
            </p>
          </div>
        </li>
      </ul>

      <div className="flex flex-col gap-[16px]">
        <motion.button
          className="flex justify-center items-center rounded-[2px] border-[1px] border-[#5383EC] group"
          onClick={handleConnectGmail}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i className="px-[14px] py-[15px]">{gLogo}</i>
          <p className="bg-[#5383EC] w-full py-[15px] text-[#FFFFFF] font-[500] text-[14px] group-hover:text-amber-300">
            Connect Gmail account
          </p>
        </motion.button>
        <Link
          className="self-center text-[12px] hover:text-amber-300"
          href="/signUp/gmailConnect/withoutGmail"
        >
          I don’t use Gmail
        </Link>
      </div>
    </main>
  );
}
