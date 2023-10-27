export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    const webhookURL = 'https://hook.us1.make.com/qmh2vrkh2ux01nfntm1oi6zlel5ir79g';
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      res.status(200).send('Subscription successful');
    } else {
      const errorData = await response.json();
      res.status(400).json(errorData);
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
