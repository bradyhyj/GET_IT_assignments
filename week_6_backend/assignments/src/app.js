import express from 'express';
import router from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3000;

// routes에서 사용한 Router 객체를 가지고 와야 함
app.use(express.json()); // JSON 요청 본문 파싱
app.use(router);         // 라우터 연결

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
