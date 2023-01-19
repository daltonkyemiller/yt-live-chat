import { getToken, JWT } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = (await getToken({ req })) as JWT & { access_token?: string };
  if (!token || !token.access_token) return res.status(403).json('error!');

  res.status(200).json(token.access_token);
}
