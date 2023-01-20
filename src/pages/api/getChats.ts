import { NextApiRequest, NextApiResponse } from 'next';
import { youtube } from '@googleapis/youtube';
import { OAuth2Client } from 'google-auth-library';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  if (!token || typeof token !== 'string') return res.status(403).json('No token provided!!!');
  const auth = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:3000/',
  );
  auth.setCredentials({ access_token: token });
  const currentBroadcasts = await youtube({ version: 'v3', auth }).liveBroadcasts.list({
    part: ['snippet', 'contentDetails', 'status', 'id'],
    broadcastStatus: 'active',
  });
  const liveId = currentBroadcasts?.data.items?.[0]?.snippet?.liveChatId;
  if (!liveId) return res.status(404).json('No live chat found');

  const chat = await youtube({ version: 'v3', auth }).liveChatMessages.list({
    part: ['snippet', 'authorDetails'],
    liveChatId: liveId,
  });

  if (!chat?.data?.items) return res.status(404).json({ error: 'No messages found' });

  res.status(200).json(chat.data.items);
}
