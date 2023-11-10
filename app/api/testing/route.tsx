export async function POST() {
    const res = {
        method: "POST",
        headers: {},
        body: JSON.stringify({ time: new Date().toISOString() }),
    };

    const data = await res;

    return Response.json(data);
}
