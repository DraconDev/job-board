"use client";
export function ShowHtml({ userText }: { userText: string }) {
    return (
        <div className="description">
            <div
                className=""
                dangerouslySetInnerHTML={{ __html: userText }}
            />
        </div>
    );
}
