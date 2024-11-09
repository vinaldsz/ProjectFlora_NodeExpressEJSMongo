//Updating document based on query parameter: Flip the is_active field in the farmer_data collection for a specific farmer.
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017" || process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        const db = client.db("mongoFlora");
        const farmer = db.collection("farmer");

        const farmerDoc = await farmer.findOne({ first_name: "Oliver", last_name: "Martinez" });
        
        if (farmerDoc) {
            const newIsActiveValue = farmerDoc.isActive === true ? false : true;
            const update = { $set: { isActive: newIsActiveValue } };
            const results = await farmer.updateOne(
                { first_name: "Oliver", last_name: "Martinez" },
                update
            );

            if (results.modifiedCount > 0) {
                console.log("Update successful.");
            } else {
                console.log("Document matched, but no changes were made.");
            }
        } else {
            console.log("No document found for the specified farmer.");
        }
    } finally {
        await client.close();
    }
}

run().catch(console.dir);