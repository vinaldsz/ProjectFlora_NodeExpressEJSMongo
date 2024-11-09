//Nested Query: Find all the dates that white Jasmine was between 50-60 USD
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    const db = client.db("mongoFlora");
    const product = db.collection("product");

    const results = await product.aggregate([
      {
        $match: {
          product_name: "White Jasmine",
          "product_cost.price_per_bundle": { $gte: 50, $lte: 60 }
        }
      },
      {
        $unwind: "$product_cost"
      },
      {
        $match: {
          "product_cost.price_per_bundle": { $gte: 50, $lte: 60 }
        }
      },
      {
        $project: {
          productname: "$product_name", 
          date: { $dateToString: { format: "%Y-%m-%d", date: "$product_cost.created_at" } }, 
          price: "$product_cost.price_per_bundle" 
        }
      }
    ]).toArray();

    // Format the output
    results.forEach(result => {
      console.log(`productname: ${result.productname}`);
      console.log(`Date: ${result.date}, Price: $${result.price}`);
    });
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
