import Nav from "@/components/Nav";
import clsx from "clsx";
import { Merriweather_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const raleway = Raleway({ subsets: ["latin"], variable: "--display-font" });
const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen",
          raleway.className,
          raleway.variable,
          merriweather.className,
          merriweather.variable
        )}
      >
        <Providers>
          <Nav />
          <main className="bg-white dark:bg-slate-950 pr-[5%] pl-[calc(5%+8rem)] py-10 min-h-screen h-screen">
            <div className="max-w-[80rem] w-full h-full mx-auto">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
