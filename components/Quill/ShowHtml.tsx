export function ShowHtml({ userText }: { userText: string }) {
    return (
        <div
            className="w-full h-auto rounded"
            dangerouslySetInnerHTML={{ __html: userText }}
        />
    );
}
