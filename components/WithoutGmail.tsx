"use client";

import { chevronLight, chevronDark } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { UserContext } from "./UserContext";
import { motion } from "framer-motion";

export default function WithoutGmail() {
  const [option, setOption] = useState<string>("Select platform");

  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  const handlePrevPage = (): void => {
    push("/signUp/shopify");
  };

  const handleNextPage = (): void => {
    push("/onboardingComplete");
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setOption(event.target.value);
  };

  const handleSubmit = (): void => {
    push("/otherPlatform");

    userCtx?.setUser({
      name: userCtx?.user?.name,
      email: userCtx?.user?.email,
      store: userCtx?.user?.store,
      gmail: false,
      password: userCtx?.user?.password,
    });
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
                ? "flex items-center text-[12px] px-[8px] hover:text-amber-300"
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
        <h2 className="font-[600] text-[24px] text-[#134267]">
          Don’t use Gmail?
        </h2>
        <p className="text-[14px] leading-[21px]">
          Chad Beta is currently only integrated with Gmail. We’ll send you an
          email when Chad becomes compatible with your support ticket platform.
        </p>
      </div>

      <form className="w-full flex flex-col gap-[8px]">
        <label className="font-[500] text-[12px]">Platform</label>
        <Form.Select
          className="bg-[#F8F9FC] py-[10px] pr-[10px] pl-[15px] rounded-[4px]text-[16px]"
          onChange={handleOptionChange}
        >
          <option>Select platform</option>
          <option value="1">Platform One</option>
          <option value="2">Platform Two</option>
          <option value="3">Platform Three</option>
        </Form.Select>
      </form>

      <div className="flex flex-col gap-[16px]">
        {option === "Select platform" && (
          <button
            type="button"
            className="bg-gray-300 w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px]"
            disabled
          >
            Submit
          </button>
        )}
        {option !== "Select platform" && (
          <motion.button
            type="button"
            className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] hover:text-amber-300"
            onClick={handleSubmit}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Submit
          </motion.button>
        )}

        <p className="self-center text-[12px]">
          Actually use Gmail?{" "}
          <Link
            href="/signUp/gmailConnect"
            className="text-[#32ABF2] hover:text-amber-300"
          >
            Connect
          </Link>
        </p>
      </div>
    </main>
  );
}
