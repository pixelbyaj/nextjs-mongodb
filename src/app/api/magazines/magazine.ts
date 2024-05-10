import { Schema, Document } from "mongoose";
import mongoose from "../db/connect";

// Define the Article interface for TypeScript
interface IArticle extends Document {
    title: string;
    text: string;
    image?: string[];
}

// Define the Magazine interface for TypeScript
export interface IMagazine extends Document {
    title: {
        type: String;
        required: true;
        default: "Ecos";
    };
    image?: string;
    articles: IArticle[];
}

// Define the Magazine schema
const magazineSchema = new Schema<IMagazine>({
    title: {
        type: String,
        required: true,
        default: "Ecos",
    },
    image: {
        type: String,
    },
    articles: [{
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
    }],
});

// Create the Magazine model using the schema
const Magazine = mongoose.models.magazine || mongoose.model<IMagazine>('magazine', magazineSchema);
export default Magazine;


