const { MongoClient } = require ("mongodb"); 
const uri ="mongodb+srv://FezeSteve:Huguette199023@cluster0.aeeum4n.mongodb.net/?retryWrites=true&w=majority"; 
const client = new MongoClient(uri); 

async function run (){
    try{
        await client.connect(); 
        const db = client.db('users'); 
        const collection = db.collection('register'); 
        const firstUser = await collection.findOne();
        console.log(firstUser) 
    }finally{
        await client.close(); 
    }
}
run().catch(console.error); 
