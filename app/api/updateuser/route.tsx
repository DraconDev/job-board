// * register user with cv

import { updateUser } from "@/db/mongo";

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    updateUser(data);
}
