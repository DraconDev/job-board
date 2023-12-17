export function ShowHtml({ userText }: { userText: string }) {
    return (
        <div
            className="bg-white text-black p-2 w-full h-auto rounded"
            dangerouslySetInnerHTML={{ __html: userText }}
        />
    );
}
