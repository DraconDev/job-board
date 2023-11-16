
export async function POST(request: Request) {
    const data = await request.json();
    const { title, description, location, salaryMin, salaryMax, date } =
        await data;



    return new Response("Job saved", {});
}
