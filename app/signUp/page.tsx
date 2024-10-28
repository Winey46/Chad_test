import { eyeOff } from "@/utils/icons";
import Link from "next/link";

export default function SignUpPage() {
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
          />
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <label className="font-[500] text-[12px]" htmlFor="email">
            Your name
          </label>
          <input
            className="bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
            type="text"
            name="text"
            placeholder="Mega Chad"
          />
        </div>
        <div className="w-full flex flex-col gap-[8px]">
          <label className="font-[500] text-[12px]" htmlFor="email">
            Password
          </label>
          <div className="relative inline-block">
            <input
              className="w-full bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
              type="password"
              name="password"
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
          Create account
        </button>
        <p className="self-center ">
          Already have an account? {" "}
          <Link href="#" className="text-[#32ABF2]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
