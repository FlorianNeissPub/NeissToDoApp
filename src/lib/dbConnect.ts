import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI in environment');
}

// Use a global type-safe cache for mongoose connection
type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongoCache || { conn: null, promise: null };

if (!cached.promise) {
  const opts = { bufferCommands: false };
  cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  global._mongoCache = cached;
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  cached.conn = await cached.promise!;
  return cached.conn;
}