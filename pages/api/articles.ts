

import type { NextApiRequest, NextApiResponse } from 'next'
import Article, {IArticle} from './schemas/article';
import { mongoHelper } from './helper/mongo-helper';

try
{
    (async ()=>{
        await mongoHelper.connect();
        console.log('Connected to MongoDB');
      })();      
}
catch(error)
{
    console.error('Error connecting to MongoDB', error);
    throw new Error('Could not connect to MongoDB');
}

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