import { MongoClient } from 'mongodb';

const DB = process.env.DB || '';

export default MongoClient.connect(DB).then(cl => cl.db());