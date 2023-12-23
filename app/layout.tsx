import AuthProvider from "@/components/Auth/AuthProvider";
import NavBar from "@/components/Navbar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
                <QueryClientProvider client={queryClient}>
                    <body className={`${font.className} h-[100vh]  `}>
                        <div className="flex w-full h-full flex-col ">
                            <NavBar />
                            {/* <ThemeSwitcher /> */}
                            <div className="flex  justify-center h-full w-full bg-primary">
                                <div className="flex  justify-center h-full max-w-5xl w-full  items-center flex-col pt-[52px]">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </body>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </AuthProvider>
        </html>
    );
}
<NavBar />;
