import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <html lang="en">
            <body className={inter.className}>
                <div className="flex w-full h-full flex-col">
                    <NavBar />
                    <div className="flex justify-center items-center h-screen w-full ">
                        <div className="flex  justify-center items-center h-screen max-w-5xl w-full ">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
<NavBar />;
