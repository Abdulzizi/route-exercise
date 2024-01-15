import express, {Request, Response} from 'express';
import { validateCube } from './middleware/validateCube';
import routeBangunDatar from './routes/bangunDatar';
import routeBangunRuang from './routes/bangunRuang';

const app = express();
const PORT = 3000;

app.use(routeBangunDatar);
app.use(routeBangunRuang);

app.use(express.json());

app.get('/', (req: Request, res: Response) => { 
    res.status(200).json({message: 'Berhasil wak!'});
});

/*

app.get('/telkom/:nama/:gender', (req: Request, res: Response) => {
    let nama: string = req.params.nama;
    let gender: string = req.params.gender;

    let message: string = `My name is ${nama} and my gendah is ${gender}`;

    res.status(200).json(message);
});

app.post('/moklet', (req: Request, res: Response) => {
    let panjang: number = req.body.panjang;
    let lebar: number = req.body.lebar;

    let luasPersegiPanjang: number = panjang * lebar;
    let message: string = `Luas persegi panjang adalah ${luasPersegiPanjang}cm`

    res.status(200).json(message);
});

app.get('/konversi/:suhuAwal', (req: Request, res: Response) => {
    let suhuAwal:any = req.params.suhuAwal;

    let fahrenheit: number = Math.floor((9 / 5 * suhuAwal) + 32);
    let kelvin: number = Number(suhuAwal) + 273;
    let reamur: number = (4 / 5) * suhuAwal;

    let message: string = `Suhu Celcius = ${suhuAwal} => Fahrenheit = ${fahrenheit}°, Celcius => Kelvin = ${kelvin}°, Celcius => reamur = ${reamur}°`;

    res.status(200).json(message);
});

app.post('/balok', validateCube, (req: Request, res: Response) => {
    const p: number = Number(req.body.p);
    const l: number = Number(req.body.l);
    const t: number = Number(req.body.t);

    const calculate = p * l * t;

    console.log(`Hasil : ${calculate}`);

    res.status(200).json({
        p,l,t,calculate
    });
});
*/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});