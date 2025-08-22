export default function handler(req, res) {
  if (req.method === 'POST') {
    const order = req.body;
    console.log('Новый заказ:', order);
    res.status(200).json({ status: 'ok' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
