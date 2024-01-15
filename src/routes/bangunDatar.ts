import express from 'express';
import * as bangunDatar from "../controller/bangunDatar";

const app = express();

app.use(express.json());

app.post('/lingkaran/luas', bangunDatar.luasLingkaran);
app.post('/lingkaran/keliling', bangunDatar.kelilingLingkaran);
app.post('/persegi/luas', bangunDatar.luasPersegi);
app.post('/persegi/keliling', bangunDatar.kelilingPersegi);
app.post('/persegiPanjang/luas', bangunDatar.luasPersegiPanjang);
app.post('/persegiPanjang/keliling', bangunDatar.kelilingPersegiPanjang);
app.post('/segitiga/luas', bangunDatar.luasSegitiga);

export default app;