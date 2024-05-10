import mongoose, { Schema, Document } from "mongoose";

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
        image: [{
            type: String,
        }],
    }],
});

// Create the Magazine model using the schema
const Magazine = mongoose.models.magazine || mongoose.model<IMagazine>('magazine', magazineSchema);
export default Magazine;




// import mongoose, { Schema, Document } from "mongoose";

// // Define the Post interface for TypeScript
// interface IMagazine extends Document {
//     message: string;
// }

// // Define the Magazine schema
// const magazineSchema = new Schema<IMagazine>({
//     message: {
//         type: String,
//         required: true,
//     }
// });

// // Create the Post model using the schema
// // const Magazine = mongoose.model<IMagazine>('magazine', magazineSchema);
// const Magazine = mongoose.models.magazine || mongoose.model<IMagazine>('magazine', magazineSchema);
// export default Magazine;

