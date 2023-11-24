import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Job Board",
    description: "Job Board",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="">
            <body className={`${inter.className} overflow-hiddens`}>
                <div className="flex w-full h-full flex-col">
                    <NavBar />
                    {/* <ThemeSwitcher /> */}
                    <div className="flex justify-center h-screen w-full mt-1">
                        <div className="flex  justify-center h-screen max-w-5xl w-full ">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
<NavBar />;
