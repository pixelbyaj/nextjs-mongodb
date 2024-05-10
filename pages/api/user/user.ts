import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoHelper } from '../helper/mongo-helper';
import { IUser, UserProfile } from '../schemas/user';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case 'POST':

      break;
    case 'GET':
      const users = await getUsers();
      res.status(200).json(users);
      break;
    default:
      res.status(400).json({ message: 'not found' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: process.env.BodySizeLimit,
      responseLimit: process.env.ResponseSizeLimit,
      externalResolver: false,
    },
  },
}

const getUsers = async () => {
  const moongose = await mongoHelper.getMongoDb();
  const users: IUser[] = await UserProfile.find();
  return users;
}