//Complex search criterion: Find the product details for product Jasmine or any product that has price_per_bundle greater than 60 on any day.
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017" || process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
    try {
    const db = client.db("mongoFlora");
    const product = db.collection("product");

    const results = await product.find({
        $or: [
            { product_name: { $regex: "Jasmine", $options: "i" } },
             { "product_cost.price_per_bundle": { $gt: 60 } }
        ]
    }).toArray();
    console.log(JSON.stringify(results, null, 2));
    } finally {
        await client.close();
    }
}

run().catch(console.dir);