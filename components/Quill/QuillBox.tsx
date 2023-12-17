"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
// or 'quill.bubble.css' for bubble theme
export interface IAppProps {
    userText: string;
    setUserText: (text: string) => void;
}

export function QuillBox({ userText, setUserText }: IAppProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const ReactQuill = dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <p>Loading...</p>,
    });

    return (
        loaded && (
            <div className="  w-full h-[320px] mb-10 bg-white text-black ">
                <ReactQuill
                    theme="snow"
                    value={userText}
                    onChange={setUserText}
                    // style={{ height: "285px" }}
                    className=" rounded-lg h-[277px] "
                />
            </div>
        )
    );
}
