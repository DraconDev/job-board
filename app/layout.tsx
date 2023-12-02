import AuthProvider from "@/components/Auth/AuthProvider";
import NavBar from "@/components/Layout/NavBar";
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
        <html
            lang="en"
            className=" h-screen w-screen  bg-primary"
        >
            <AuthProvider>
                <body className={`${inter.className} overflow-hidden`}>
                    <div className="flex w-full h-full flex-col ">
                        <NavBar />
                        {/* <ThemeSwitcher /> */}
                        <div className="flex justify-center h-full w-full bg-primary">
                            <div className="flex  justify-center h-full max-w-5xl w-full ">
                                {children}
                            </div>
                        </div>
                    </div>
                </body>
            </AuthProvider>
        </html>
    );
}
<NavBar />;
