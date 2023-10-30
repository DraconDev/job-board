const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://angelboard:angeljobs@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export async function checkDB() {
    try {
        // Connect the mongoClient to the server	(optional starting in v4.7)
        await mongoClient.connect();
        // Send a ping to confirm a successful connection
        await mongoClient.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the mongoClient will close when you finish/error
        await mongoClient.close();
    }
}

export async function addJob() {
    try {
        // Connect the mongoClient to the server	(optional starting in v4.7)
        await mongoClient.connect();
        // Send a ping to confirm a successful connection
    } finally {
        // Ensures that the mongoClient will close when you finish/error
        await mongoClient.close();
    }
}
