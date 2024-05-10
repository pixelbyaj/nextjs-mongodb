import  { Schema, Document } from "mongoose";
import mongoose from "../db/connect"

// Define the Article interface for TypeScript
interface IArticle extends Document {
    title: string;
    text: string;
    image?: string[];
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
    image: [{
        type: String,
    }],
});

// Create the Article model using the schema
const Article = mongoose.models.article || mongoose.model<IArticle>('article', articleSchema);
export default Article;
