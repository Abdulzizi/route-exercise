import express from 'express';
import * as bangunRuang from '../controller/bangunRuang';
import * as validate from '../middleware/validateRuang';

const app = express();

app.use(express.json());

app.post('/tabung/volume',validate.validateTabung, bangunRuang.volumeTabung);
app.post('/tabung/luas',validate.validateTabung, bangunRuang.luasPermukaanTabung);
app.post('/kubus/volume',validate.validateKubus, bangunRuang.volumeKubus);
app.post('/kubus/luas',validate.validateKubus, bangunRuang.luasPermukaanKubus);
app.post('/balok/volume',validate.validateBalok, bangunRuang.volumeBalok);
app.post('/balok/luas',validate.validateBalok, bangunRuang.luasPermukaanBalok);
app.post('/bola/volume',validate.validateBola, bangunRuang.volumeBola);
app.post('/bola/luas',validate.validateBola, bangunRuang.luasPermukaanBola);

export default app;