import { chevronLight, chevronDark, check } from "@/utils/icons";
import Link from "next/link";

export default function OtherStorePage() {
  return (
    <main className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[12px]">Step 2 of 4</p>
        <span className="flex h-[8px] border-[1px] border-[#C9D3E0] rounded-[4px]">
          <span className="h-full w-[50%] bg-[#C9D3E0]"></span>
        </span>
        <div className="w-full flex justify-between">
          <button className="flex items-center text-[12px] px-[8px]">
            <i>{chevronDark}</i>Prev
          </button>
          <button className="flex items-center text-[12px] px-[8px] text-[#C3CAD5]">
            Next<i className="rotate-180">{chevronLight}</i>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h2 className="font-[600] text-[24px] text-[#134267]">
          Don’t use Shopify?
        </h2>
        <p className="text-[14px] leading-[21px]">
          Chad Beta is currently only available on Shopify. We’ll send you an
          email when Chad becomes available on your platform.
        </p>
      </div>

      <form className="w-full flex flex-col gap-[8px]">
        <label className="font-[500] text-[12px]" htmlFor="platform">
          Platform
        </label>
        <input
          className="bg-[#F8F9FC] py-[10px] pr-[10px] pl-[17px] rounded-[4px] placeholder:text-[#C3CAD5] placeholder:text-[16px]"
          type="text"
          name="platform"
          placeholder="Select platform"
        />
        <i className="">{chevronDark}</i>
      </form>

      <div className="flex flex-col gap-[16px]">
        <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px]">
          Create account
        </button>
        <p className="self-center ">
          Already have an account?{" "}
          <Link href="#" className="text-[#32ABF2]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}