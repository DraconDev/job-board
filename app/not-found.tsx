import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex items-center justify-center h-screen flex-col text-2xl">
            <div className="p-3">
                <h1>Page not found</h1>
            </div>
            <div>
                <Link href="/">Go back</Link>
            </div>
        </div>
    );
}
