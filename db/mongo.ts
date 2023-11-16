import { Job } from "@/type/types";
import mongoose from "mongoose";
import { JobPost } from "./schema";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority`;

// export const mongoClient = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// });

// export async function checkDB() {
//     try {
//         await mongoClient.connect();
//         await mongoClient.db("admin").command({ ping: 1 });
//         console.log(
//             "Pinged your deployment. You successfully connected to MongoDB!"
//         );
//     } finally {
//         await mongoClient.close();
//     }
// }

async function connectDb() {
    await mongoose.connect(uri);
}

export async function addJob(job: Job) {
    console.log(job);
    await connectDb();
    try {
        // Connect the mongoClient to the server	(optional starting in v4.7)

        // const jobPost = new JobPost(job);

        // save the job
        await JobPost.create(job);
        // await jobPost.save();

        // Send a ping to confirm a successful connection
    } finally {
        // Ensures that the mongoClient will close when you finish/error
        await mongoClient.close();
    }
}
