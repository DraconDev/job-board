export async function POST(request: Request) {
    const test = await request.json();
    const res = {
        method: "POST",
        headers: {},
        body: JSON.stringify({ time: new Date().toISOString() }),
    };

    console.log(test);
    const data = await res;

    return Response.json(data);
}
