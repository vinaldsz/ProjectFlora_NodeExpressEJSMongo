//Counting Documents: Count total number of expenses made by a specific farmer : Jane Smith
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017" || process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
    try {
    const db = client.db("mongoFlora");
    const expense_data = db.collection("expense");

    const results = await expense_data.countDocuments({$and: [ {"farmer.first_name": "Jane"}, {"farmer.last_name": "Smith"}]});
    console.log( "Jane Smith has", results, "Documents");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);