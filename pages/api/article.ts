import mongoose, { Schema, Document } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on("error", (err) => {
    console.log('Error connecting to MongoDB', err);
});


// Define the Article interface for TypeScript
export interface IArticle extends Document {
    title: string;
    text: string;
    images?: string[];
}

// Define the Article schema
const articleSchema = new Schema<IArticle>({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
});

// Create the Article model using the schema
const Article = mongoose.models.article || mongoose.model<IArticle>('article', articleSchema);
export default Article;
