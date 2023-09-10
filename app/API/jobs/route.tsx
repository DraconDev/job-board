export async function GET() {
    // const data = await getAvailableJobs("job");
    checkDB().catch(console.dir);
    return 'hey';
}
