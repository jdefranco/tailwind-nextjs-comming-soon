import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const webhookURL = 'https://hook.us1.make.com/qmh2vrkh2ux01nfntm1oi6zlel5ir79g';
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    res.status(response.status).json(await response.json());
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
