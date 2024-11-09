# ProjectFlora_NodeExpressEJSMongo
A basic application the uses Node+Express+EJS+MongoDB
Submission by Vinal Dalcy Dsouza

# Requirement Document
Includes business requirement in a pdf format
    Requirement.pdf

# Logical Model
Includes logical model of the DB. Model represents various collections - embeddings, references
    Logical_Design.jpg

# JSON Collection examples
Includes examples of various collections in the model with relavant comments about the decision made
    Json_Collection_Examples.jpg


# How to load data

* Download the below mentioned files
        * base_market_incentive.json
        * expense_Data.json
        * farmer_data.json
        * product.json

* Import the file using mongoimport. If you already have port 27017 used, use 37017
```mongoimport -h localhost:27017 -d mongoFlora -c base_market_incentive --file base_market_incentive.json --jsonArray```

```mongoimport -h localhost:27017 -d mongoFlora -c expense --file expense_data.json --jsonArray```

```mongoimport -h localhost:27017 -d mongoFlora -c farmer --file farmer_data.json --jsonArray```

```mongoimport -h localhost:27017 -d mongoFlora -c product --file product.json --jsonArray```

All the collections should be successfully imported.

# Queries
* Query1: Aggregation Framework Query: calculate total expense of each farmer and display in descending order

Run the Query1.js on vscode. If you get error stating module doesn't exist, either add path to the env variable or include path while running the command eg. node root/ProjectFlora_NodeExpressEJSMongo/Documents/Query1.js
```node Query1.js```

* Query2: Complex search criterion: Find the product details for product Jasmine or any product that has price_per_bundle greater than 60 on any day.

Run the Query2.js on vscode
```node Query2.js```

* Query3: Counting Documents: Count total number of expenses made by a specific farmer : Jane Smith

Run the Query3.js on vscode
```node Query3.js```

* Query4: Updating document based on query parameter: Flip the is_active field in the farmer_data collection for a specific farmer.

Run the Query4.js on vscode
```node Query4.js```

* Query5: Nested Field Query: Find all the dates that white Jasmine was between 50-60 USD

Run Query5.js on vscode using
```nnode Query5.js```
