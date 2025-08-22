const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let menu = [
  { id: 1, name: 'Бургер', price: 150 },
  { id: 2, name: 'Картошка фри', price: 80 },
  { id: 3, name: 'Салат Цезарь', price: 120 },
];

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  console.log('Новый заказ:', order);
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
