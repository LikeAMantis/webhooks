import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {

      return;
    }
    if (req.method === 'POST') {

      return;
    }
    if (req.method === 'DELETE') {

      return;
    }

    res.send('ok');
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
