"use client";
import JobContainer from "@/components/JobContainer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    // checkDB().catch(console.dir);
    function checkDB() {
        return fetch("/api/mozi").then((res) => res.json());
    }
    function searchJobs() {
        return fetch("/api/mozi").then((res) => res.json());
    }
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
