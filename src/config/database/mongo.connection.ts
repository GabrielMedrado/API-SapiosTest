import { MongoClient, ServerApiVersion } from 'mongodb';

const usuario = process.env.DB_USER;
const senha = process.env.DB_PASS;

// const URL = `mongodb+srv://${usuario}:${senha}@cluster0.k0ypglp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const URL = `mongodb+srv://${usuario}:${senha}@cluster0.k0ypglp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const uri = `mongodb+srv://${usuario}:${senha}@cluster0.k0ypglp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
