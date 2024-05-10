import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})
mongoose.connection.on("error", (err) => {
    console.log(err);
});

export default mongoose