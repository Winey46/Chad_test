"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  useEffect(() => {
    if (!userCtx?.user) push("/signUp");
  }, [userCtx?.user]);

  return (
    <main className="flex justify-center items-start mt-[32px]">
      <p className="text-[18px] leading-[21px]">
        Hello Luna Edge, My name is Anton.
      </p>
    </main>
  );
}
