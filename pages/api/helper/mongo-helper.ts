import mongoose, { Schema, Document } from "mongoose";

const mongoHelper = Object.seal({
    connect: async () : Promise<void> => {
        if (mongoose.connection.readyState === 1) {
            return;
        }
        await mongoose.connect((process.env.MONGODB_URI || process.env.MONGOLAB_URI) as string);
    }
});

export { mongoHelper, Schema, Document };
export default mongoose.connection;
