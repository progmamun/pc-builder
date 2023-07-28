const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri =
//   "mongodb+srv://<username>:<password>@cluster0.wh888.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = client.db("pcbuilder").collection("products");

    if (req.method === "GET") {
      const pcData = await productCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: pcData });
    }

    // if (req.method === "POST") {
    //   const pcData = req.body;
    //   const result = await productCollection.insertOne(pcData);
    //   res.json(result);
    // }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
