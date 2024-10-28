import { checkRoundedBig } from "@/utils/icons";

export default function OtherPlatformPage() {
  return (
    <div className="w-full mt-[112px] flex flex-col items-center gap-[32px]">
      <i>{checkRoundedBig}</i>

      <div className="flex flex-col gap-[8px] items-center">
        <h3 className="font-[500] text-[16px] text-[#134267]">
          Response received
        </h3>
        <p className="text-[14px] leading-[21px] text-center">
          Thank you for your interest in Chad! We’ll be hard at work building
          integrations to support your platform.
        </p>
        <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px] mt-[8px]">
          Done
        </button>
      </div>
    </div>
  );
}
