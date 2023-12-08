// loading page for next js 14
"use client";

export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            {/* <h1 className="text-2xl">Loading...</h1> */}
            {/* Add loading spinner */}
            <div
                className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full"
                role="status"
            ></div>
        </div>
    );
}
