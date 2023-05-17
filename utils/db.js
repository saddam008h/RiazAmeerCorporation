import { MongoClient } from "mongodb";

export async function connectDB(){
    const client = await MongoClient.connect(process.env.MONGODB)
    return client
} 
