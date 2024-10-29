"use client";

import { chadIcon, eye, eyeOff } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { login } from "@/utils/http";
import { motion } from "framer-motion";

export default function SignIn() {
  const [isPending, setIsPending] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const emailInputChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEmailValue(event.target.value);

  const [passwordValue, setPasswordValue] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const passwordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setPasswordValue(event.target.value);

  const userCtx = useContext(UserContext);

  const { push } = useRouter();

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  async function handleLogin(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    let isSubmit = true;

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      setEmailError(true);
      isSubmit = false;
    }

    if (
      passwordValue.trim().length < 6 ||
      !/[A-Z]/.test(passwordValue.trim()) ||
      !/[a-z]/.test(passwordValue.trim()) ||
      !/\d/.test(passwordValue.trim())
    ) {
      setPasswordError(true);
      isSubmit = false;
    }

    if (isSubmit) {
      setIsPending(true);

      let response;
      if (
        userCtx?.user?.email === emailValue &&
        userCtx?.user?.password === passwordValue
      ) {
        response = await login(true);
      } else {
        response = await login(false);
      }

      if (!response.ok)
        throw new Error("Could not login, please try again later");
      else {
        push("/");
      }
      setIsPending(false);
    }
  }

  useEffect(() => {
    if (emailValue.includes("@") && emailValue.includes("."))
      setEmailError(false);

    if (
      passwordValue.trim().length >= 6 &&
      /[A-Z]/.test(passwordValue) &&
      /[a-z]/.test(passwordValue) &&
      /\d/.test(passwordValue)
    )
      setPasswordError(false);
  }, [emailValue, passwordValue]);

  return (
    <>
      <header className="flex items-center py-[16px]">
        <i>{chadIcon}</i>
        <h1 className="exodus__font text-[24px] text-[#20496C]">Chad</h1>
      </header>

      <main className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="font-[600] text-[24px] text-[#134267]">
            Welcome back
          </h2>
          <p className="text-[14px] leading-[21px]">
            Feeling ready to take on the day? Chad is too!
          </p>
        </div>

        <form className="flex flex-col gap-[24px]">
          <div className="w-full flex flex-col gap-[8px]">
            <label className="font-[500] text-[12px]" htmlFor="email">
              Email
            </label>
            <input
              className="bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
              type="email"
              name="email"
              placeholder="megachad@trychad.com"
              onChange={emailInputChange}
            />
            {emailError && (
              <p className=" text-[14px] text-red-400">
                Should contain "@" and "." symbols
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-[8px]">
            <label className="font-[500] text-[12px]" htmlFor="Password">
              Password
            </label>
            <div className="relative inline-block">
              <input
                className="w-full bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
                type={showPassword ? "text" : "password"}
                name="Password"
                placeholder="Enter password"
                onChange={passwordInputChange}
              />
              <i
                className="absolute right-[10px] top-[50%] -translate-y-2/4"
                onClick={handleShowPassword}
              >
                {showPassword ? eye : eyeOff}
              </i>
            </div>
            {passwordError && (
              <p className=" text-[14px] text-red-400">
                Should contain at least 6 symbols, upper and lower case symbols
                and numbers
              </p>
            )}
          </div>
        </form>

        <div className="flex flex-col gap-[16px]">
          <motion.button
            className={
              isPending
                ? "hidden"
                : "bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] hover:text-amber-300"
            }
            onClick={handleLogin}
            disabled={isPending}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Login
          </motion.button>
          {isPending && <p className="spinner self-center"></p>}
          <p className="self-center text-[12px]">
            Don’t have an account?{" "}
            <Link
              href="/signUp"
              className="text-[#32ABF2] hover:text-amber-300"
            >
              Join the waitlist
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
