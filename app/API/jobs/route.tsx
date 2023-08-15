export async function GET() {
    const data = await getAvailableJobs("job");
    return data;
}
