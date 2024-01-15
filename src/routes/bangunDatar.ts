import express from 'express';
import * as bangunDatar from '../controller/bangunDatar';
import * as validate from '../middleware/validateDatar'

const app = express();

app.use(express.json());

app.post('/lingkaran/luas',validate.validateLingkaran, bangunDatar.luasLingkaran);
app.post('/lingkaran/keliling',validate.validateLingkaran, bangunDatar.kelilingLingkaran);
app.post('/persegi/luas',validate.validatePersegi, bangunDatar.luasPersegi);
app.post('/persegi/keliling',validate.validatePersegi, bangunDatar.kelilingPersegi);
app.post('/persegiPanjang/luas',validate.validatePersegiPanjang, bangunDatar.luasPersegiPanjang);
app.post('/persegiPanjang/keliling',validate.validatePersegiPanjang, bangunDatar.kelilingPersegiPanjang);
app.post('/segitiga/luas',validate.validateSegitiga, bangunDatar.luasSegitiga);

export default app;