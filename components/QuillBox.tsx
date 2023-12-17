"use client";
import ReactQuill from "react-quill";

export interface IAppProps {
    userText: string;
    setUserText: (text: string) => void;
}

export function QuillBox({ userText, setUserText }: IAppProps) {
    return (
        <div className="bg-white text-black p-2">
            <ReactQuill
                theme="snow"
                value={userText}
                onChange={setUserText}
            />
        </div>
    );
}
