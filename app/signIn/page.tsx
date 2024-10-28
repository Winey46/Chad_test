import { chadIcon, eyeOff } from "@/utils/icons";
import Link from "next/link";

export default function SignInPage() {
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
            />
          </div>
          <div className="w-full flex flex-col gap-[8px]">
            <label className="font-[500] text-[12px]" htmlFor="Password">
              Password
            </label>
            <div className="relative inline-block">
              <input
                className="w-full bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
                type="password"
                name="Password"
                placeholder="Enter password"
              />
              <i className="absolute right-[10px] top-[50%] -translate-y-2/4">
                {eyeOff}
              </i>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-[16px]">
          <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px]">
            Login
          </button>
          <p className="self-center texr-[12px]">
            Don’t have an account?{" "}
            <Link href="#" className="text-[#32ABF2]">
              Join the waitlist
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
