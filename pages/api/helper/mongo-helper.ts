import mongoose from "mongoose";
export const mongoHelper = Object.seal({
    getMongoDb: async () => {
        await mongoose.connect((process.env.MONGODB_URI || process.env.MONGOLAB_URI) as string);
        return mongoose;
    }
});
