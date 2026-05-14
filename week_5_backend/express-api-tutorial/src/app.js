import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDay().toString().padStart(2, '0');
const yyyy_mm_dd = `${year}-${month}-${day}`;

const hour = today.getHours().toString().padStart(2, '0');
const minute = today.getMinutes().toString().padStart(2, '0');
const second = today.getSeconds().toString().padStart(2, '0');
const hh_mm_ss = `${hour}:${minute}:${second}`;

const day_and_time = `${yyyy_mm_dd} ${hh_mm_ss}`;



// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/hello', (req, res) => {
  res.status(200).send('안녕하세요, Express!');
});

app.get('/api/time', (req, res) => {
  res.status(200).json( { "time": day_and_time } );
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
