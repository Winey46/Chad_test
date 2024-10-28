import { chevronLight, chevronDark, check } from "@/utils/icons";

export default function ShopifyPage() {
  return (
    <>
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
            Prev<i className="rotate-180">{chevronLight}</i>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h2 className="font-[600] text-[24px] text-[#134267]">
          Connect to Shopify Store
        </h2>
        <p className="text-[14px] leading-[21px]">
          Installs the Chad widget in your Shopify store and sets it up to
          display your customers’ order information and self-serve options.
        </p>
      </div>

      <ul className="flex flex-col w-full bg-[#F8F9FC] p-[16px] gap-[16px]">
        <li className="flex gap-[4px]">
          {check}
          <div>
            <p className="text-[14px] font-[500] text-[#134267]">
              Track orders and shipping
            </p>
            <p className="text-[12px]">
              Global coverage with 600+ couriers supported
            </p>
          </div>
        </li>
        <li className="flex gap-[4px]">
          {check}
          <div>
            <p className="text-[14px] font-[500] text-[#134267]">
              Manage orders
            </p>
            <p className="text-[12px]">
              Allow customers to track, return, exchange, or report problems
              with their orders
            </p>
          </div>
        </li>
        <li className="flex gap-[4px]">
          {check}
          <div>
            <p className="text-[14px] font-[500] text-[#134267]">
              Process returns and exchanges
            </p>
            <p className="text-[12px]">
              Automatically checks your store policy and existing inventory
              before resolving or escalating each request
            </p>
          </div>
        </li>

        <div className="flex flex-col gap-[16px]">
          <button className="bg-[#32ABF2] w-full py-[11px] rounded-[8px] text-[#FFFFFF] font-[500] text-[14px]">
            Connect store
          </button>
          <button className="self-center text-[12px]">
            I don’t use Shopify
          </button>
        </div>
      </ul>
    </>
  );
}
