import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body
    // if (!data.due) return;
    console.log('todoist-gcal webhook handler')
    console.log(data)
    res.send('ok');
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
