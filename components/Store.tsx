"use client";

import { checkRounded } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { motion } from "framer-motion";

interface IStore {
  storeName: string;
}

export default function Store({ storeName }: IStore) {
  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  const handleContinue = (): void => {
    userCtx?.setUser({
      name: userCtx?.user?.name,
      email: userCtx?.user?.email,
      store: storeName,
      gmail: userCtx?.user?.gmail,
      password: userCtx?.user?.password,
    });

    push("/signUp/gmailConnect");
  };

  return (
    <div className="w-full mt-[112px] flex flex-col items-center gap-[32px]">
      <div className="relative">
        <Image
          src="/images/raccoon.png"
          alt="raccoon_logo"
          width={80}
          height={80}
        />
        <i className="absolute top-0 right-0">{checkRounded}</i>
      </div>

      <div className="flex flex-col gap-[8px] items-center">
        <h3 className="font-[500] text-[16px] text-[#134267]">
          {userCtx?.user?.store !== storeName
            ? "Store Connected"
            : `${storeName} already connected`}
        </h3>
        {userCtx?.user?.store !== storeName && (
          <p className="text-[14px] leading-[21px] text-center">
            Chad is now able to manage customer support requests for {storeName}
            .
          </p>
        )}
        <motion.button
          className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] my-[8px] hover:text-amber-300"
          onClick={handleContinue}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Continue
        </motion.button>
        <p className="text-[12px]">
          Wrong store?{" "}
          <Link
            href="/signUp/shopify/otherStore"
            className="text-[#32ABF2] hover:text-amber-300"
          >
            Connect another one
          </Link>
        </p>
      </div>
    </div>
  );
}
