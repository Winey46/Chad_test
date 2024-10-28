import { chadIcon } from "@/utils/icons";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex items-center py-[16px]">
        <i>{chadIcon}</i>
        <h1 className="exodus__font text-[24px] text-[#20496C]">Chad</h1>
      </header>
      {children}
    </>
  );
}
