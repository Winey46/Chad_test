"use client";

import { useContext, useEffect, useState } from "react";
import { createUser } from "@/utils/http";
import { eye, eyeOff } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "./UserContext";
import { motion } from "framer-motion";

export default function SignUp() {
  const [isPending, setIsPending] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const emailInputChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEmailValue(event.target.value);

  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const nameInputChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNameValue(event.target.value);

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

  async function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    let isSubmit = true;

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      setEmailError(true);
      isSubmit = false;
    }

    if (
      nameValue.trim().length < 2 ||
      !/[A-Z]/.test(nameValue.trim()) ||
      !/[a-z]/.test(nameValue.trim())
    ) {
      setNameError(true);
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

      const response = await createUser(emailValue, nameValue, passwordValue);

      if (!response.ok) throw new Error("Could not create user");
      else {
        setIsPending(false);

        push("/signUp/shopify");

        userCtx?.setUser({
          name: nameValue,
          email: emailValue,
          store: undefined,
          gmail: undefined,
          password: passwordValue,
        });
      }
    }
  }

  useEffect(() => {
    if (emailValue.includes("@") && emailValue.includes("."))
      setEmailError(false);

    if (
      nameValue.trim().length > 1 &&
      /[A-Z]/.test(nameValue.trim()) &&
      /[a-z]/.test(nameValue.trim())
    )
      setNameError(false);

    if (
      passwordValue.trim().length >= 6 &&
      /[A-Z]/.test(passwordValue) &&
      /[a-z]/.test(passwordValue) &&
      /\d/.test(passwordValue)
    )
      setPasswordError(false);
  }, [emailValue, nameValue, passwordValue]);

  return (
    <main className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[12px]">Step 1 of 4</p>
        <span className="flex h-[8px] border-[1px] border-[#C9D3E0] rounded-[4px]">
          <span className="h-full w-[25%] bg-[#C9D3E0]"></span>
        </span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h2 className="font-[600] text-[24px] text-[#134267]">
          Welcome to Chad
        </h2>
        <p className="text-[14px] leading-[21px]">
          Go live in 10 minutes! Our self-service widget empowers your customers
          to manage orders and track shipments 24/7 without driving you crazy.
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
          <label className="font-[500] text-[12px]" htmlFor="Name">
            Your name
          </label>
          <input
            className="bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
            type="text"
            name="Name"
            placeholder="Mega Chad"
            onChange={nameInputChange}
          />
          {nameError && (
            <p className=" text-[14px] text-red-400">
              Should contain at least 2 symbols, upper and lower case symbols
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
          onClick={handleSubmit}
          disabled={isPending}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Create account
        </motion.button>
        {isPending && <p className="spinner self-center"></p>}
        <p className="self-center text-[12px]">
          Already have an account?{" "}
          <Link
            className="text-[#32ABF2] text-[12px] hover:text-amber-300"
            href="/signIn"
            prefetch
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
