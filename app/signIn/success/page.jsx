import { checkRoundedBig } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

export default function SigninSuccessPage() {
  return (
    <div className="w-full mt-[112px] flex flex-col items-center gap-[32px]">
      {/* <i>{checkRoundedBig}</i> */}
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
          Chad doesn’t support mobile browsers. To access your dashboard, login
          from your laptop or desktop computer.
        </p>
        <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] mt-[16px]">
          Ok
        </button>
        <p className="self-center texr-[12px]">
          Not xyz@triceps.com?{" "}
          <Link href="#" className="text-[#32ABF2]">
            Logout
          </Link>
        </p>
      </div>
    </div>
  );
}
