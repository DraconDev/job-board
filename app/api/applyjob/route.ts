import { User } from "@/db/schema";

function applyJob({ _id, email }: { _id: string; email: string }) {
    User.updateOne({ email: email }, { $push: { jobs: _id } }, { upsert: true })
        .then((result) => {
            // Handle success
        })
        .catch((error) => {
            // Handle error
        });

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
