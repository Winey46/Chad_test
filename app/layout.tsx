import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const exodusSans = localFont({
  src: "./fonts/EudoxusSans-Bold.woff",
  variable: "--font-exodus-sans",
  weight: "100 900",
});
const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Welcome to Chad",
  description: "The best service in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exodusSans.variable} ${interSans.variable} antialiased`}
      >
        <div
          id="root"
          className="flex justify-center items-center min-h-[100vh]"
        >
          <div className="w-[100%] h-[100vh] overflow-hidden absolute left-0 top-0 -z-10 ">
            <Image
              className="w-[100%]"
              src="/images/tileable_doodle.png"
              alt="tileable_doodle"
              width={834}
              height={1194}
            />
          </div>
          <div className="shadow bg-[#FFFFFF] px-[32px] sm:px-[50px] w-full sm:w-[460px] sm:py-[64px] sm:rounded-[8px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
