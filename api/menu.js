export default function handler(req, res) {
  if (req.method === 'GET') {
    const menu = [
      { id: 1, name: 'Бургер', price: 150 },
      { id: 2, name: 'Картошка фри', price: 80 },
      { id: 3, name: 'Салат Цезарь', price: 120 },
    ];
    res.status(200).json(menu);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
