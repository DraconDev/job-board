export async function POST(request: Request) {
    const res = await request.json();

    const data = await res;

    return Response.json(data);
}
