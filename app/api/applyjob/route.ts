function applyJob({ _id, email }: { _id: string; email: string }) {
    // fetchUpdateUser({ email } as UserType);

    return;
}

export async function POST(req: Request) {
    const data = await req.json();
    // get email and id front request
    const { _id, email } = data as { _id: string; email: string };
    if (!_id && !email) {
        return;
    }
    applyJob({ _id, email });
}
