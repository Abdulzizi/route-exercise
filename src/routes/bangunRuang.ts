import express from 'express';
import * as bangunRuang from '../controller/bangunRuang'

const app = express();

app.use(express.json());

app.post('/tabung/volume', bangunRuang.volumeTabung);
app.post('/tabung/luas', bangunRuang.luasPermukaanTabung);
app.post('/kubus/volume', bangunRuang.volumeKubus);
app.post('/kubus/luas', bangunRuang.luasPermukaanKubus);
app.post('/balok/volume', bangunRuang.volumeBalok);
app.post('/balok/luas', bangunRuang.luasPermukaanBalok);
app.post('/bola/volume', bangunRuang.volumeBola);
app.post('/bola/luas', bangunRuang.luasPermukaanBola);

export default app;