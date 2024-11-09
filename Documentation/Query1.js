//Aggregation Framework Query: calculate total expense of each farmer and display in descending order
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017" || process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
    try {
    const db = client.db("mongoFlora");
    const expense_data = db.collection("expense");

    const results = await expense_data.aggregate([
            {
              $group: {
                _id: "$farmer.farmer_id", 
                first_name: {
                  $first: '$farmer.first_name'
                },
                last_name: {
                  $first: "$farmer.last_name"
                },
                total_expense: { $sum: "$amount" }
              }
            },
            {
              $sort: {total_expense: -1}
            },
            {
              $project: {
                farmer_name: { $concat: ["$first_name", " ", "$last_name"] },
                total_expense: 1
              }
            }
          ]).toArray();
    console.log(results);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);