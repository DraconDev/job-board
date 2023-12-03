// * register user with cv

import { registerUser } from "@/db/mongo";

export async function POST(req: Request) {
    const data = await req.json();
    registerUser(data);
    return Response.json({ success: true });
}
