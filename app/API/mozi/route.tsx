export async function GET() {
    return new Response("Hello world!", {
        status: 200,
        headers: {
            "content-type": "text/html; charset=utf-8",
        },
    });
}
