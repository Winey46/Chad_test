import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Providers } from "@/components/Providers";
import Wrapper from "@/components/Wrapper";

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
        <Providers>
          <div
            id="root"
            className="flex justify-center items-start  min-h-[100vh]"
          >
            <div className="w-[100%] min-h-[732px] sm:min-h-[796px] max-h-[100%] overflow-hidden absolute left-0 top-0 -z-10 ">
              <Image
                className="w-[100%]"
                src="/images/tileable_doodle.png"
                alt="tileable_doodle"
                width={834}
                height={1194}
              />
            </div>
            <Wrapper>{children}</Wrapper>
          </div>
        </Providers>
      </body>
    </html>
  );
}
