"use client";
import JobContainer from "@/components/JobContainer";

export default function Home() {
    return (
        <main className="gap-5 bg-gray-400 w-full">
            {/* <button onClick={() => console.log("hello")}>testing</button> */}
            <JobContainer />
            {/* <button onClick={() => checkDB().catch(console.dir)}>
                testing
            </button>
            <div className=""></div>
            <Link href="/joblist">joblist</Link>
            <div className=""></div>
            <Link href="/API/mozi" onClick={() => console.log("hello")}>
                get hello
            </Link> */}
        </main>
    );
}
