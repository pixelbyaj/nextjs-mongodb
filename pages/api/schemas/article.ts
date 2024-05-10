import mongoose, { Schema, Document } from 'mongoose';

// Define the Article interface for TypeScript
export interface IArticle extends Document {
    title: string;
    text: string;
    images?: string[];
}

// Define the Article schema
export const articleSchema = new Schema<IArticle>({
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
