import AuthProvider from "@/components/Auth/AuthProvider";
import NavBar from "@/components/Navbar/NavBar";

import QueryProvider from "@/components/ReactQuery/QueryProvider";
import { QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const font = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Job Board",
    description: "Job Board",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();

    return (
        <html
            lang="en"
            className="    bg-primary "
        >
            <AuthProvider>
                <body className={`${font.className} h-[100vh]  pt-[52px]`}>
                    <div className="flex w-full h-full flex-col ">
                        <QueryProvider>
                            <NavBar />
                            {/* <ThemeSwitcher /> */}
                            <div className="flex  justify-center h-full w-full bg-primary">
                                <div className="flex  justify-center h-full max-w-5xl w-full  items-center flex-col ">
                                    {children}
                                </div>
                            </div>
                        </QueryProvider>
                    </div>
                </body>
            </AuthProvider>
        </html>
    );
}
<NavBar />;
