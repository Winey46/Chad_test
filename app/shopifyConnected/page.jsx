import { checkRounded } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

export default function UseOtherPlatfomPage() {
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
          Store Connected
        </h3>
        <p className="text-[14px] leading-[21px]">
          Chad is now able to manage customer support requests for [STORE-NAME].
        </p>
        <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] mt-[8px]">
          Continue
        </button>
        <p className="">
          Wrong store? {" "}
          <Link href="#" className="text-[#32ABF2]">
            Connect another one
          </Link>
        </p>
      </div>
    </div>
  );
}
