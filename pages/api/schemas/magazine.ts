import mongoose, { Schema, Document } from 'mongoose';
import { IArticle, articleSchema } from "./article";

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

class Magazine {
    private readonly magazineSchema: Schema;
    private COLLECTION: string = "magazine";
    
    constructor() {
        this.magazineSchema = new Schema<IMagazine>({
            title: {
                type: String,
                required: true,
                default: "Ecos"
            },
            image: {
                type: String
            },
            articles: [{ type: articleSchema }]
        });
    }

    getMagazineSchema(): mongoose.Model<IMagazine> {
        return mongoose.model<IMagazine>("magazine", this.magazineSchema, this.COLLECTION);
    }
}
// Create the Magazine model using the schema
const magazine = (new Magazine()).getMagazineSchema();

export default magazine;