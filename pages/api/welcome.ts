import type { NextApiRequest, NextApiResponse } from 'next'
import Article, {IArticle} from './article';

type ResponseData = {
    message: IArticle[] | null;
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const data = await Article.find({});
        res.status(200).json({ message: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: null });
    }
}




// import mongoose, { Document, Schema } from 'mongoose';
// import type { NextApiRequest, NextApiResponse } from 'next'
// import Magazine from './magazine';

// type ResponseData = {
//     message: any
// }


// mongoose.connect(process.env.MONGODB_URI as string);
// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// })
// mongoose.connection.on("error", (err) => {
//     console.log(err);
// });

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     const data = await Magazine.find({});
//     res.status(200).json({ message: data })
// }