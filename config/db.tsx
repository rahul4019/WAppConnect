import mongoose from 'mongoose';

export const connect = async () => {
  const { connection } = await mongoose.connect(process.env.DB_URL as string, {
    dbName: 'WAppConnect',
  });
  console.log(`DB connection on ${connection.host}`);
};
