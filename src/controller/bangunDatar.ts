import { Request, Response } from "express";

export const luasLingkaran  = (req: Request, res: Response) => {
    try {
        const phi = Math.PI;
        let r: number = req.body.r;
        const luas = Math.floor(phi * (r * r)) + 'cm';

        res.status(200).json({
            status: true,
            data: {
                r,
                luas
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const kelilingLingkaran  = (req: Request, res: Response) => {
    try {
        const phi = Math.PI;
        let r: number = Number(req.body.r);
        const keliling = Math.floor(2 * (phi * r)) + "cm";

        res.status(200).json({
            status: true,
            data: {
                r,
                keliling
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const luasPersegi = (req: Request,res: Response) => {
    try {
        const s:  number = Number(req.body.s)
        const luas = s * s
        return res.status(200).json({
            status: true,
            s,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

export const kelilingPersegi = (req: Request,res: Response) => {
    try {
        const s:  number = Number(req.body.s)
        const keliling = s * 4
        return res.status(200).json({
            status: true,
            s,
            keliling
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

export const luasPersegiPanjang = (req: Request,res: Response) => {
    try {
        const p:  number = Number(req.body.p)
        const l:  number = Number(req.body.l)
        const luas = p * l
        return res.status(200).json({
            status: true,
            p,
            l,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}


export const kelilingPersegiPanjang = (req: Request,res: Response) => {
    try {
        const p:  number = Number(req.body.p)
        const l:  number = Number(req.body.l)
        const keliling = (p * l) * 2
        return res.status(200).json({
            status: true,
            p,
            l,
            keliling
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })

    }
}

export const luasSegitiga = (req: Request,res: Response) => {
    try {
        const a:  number = Number(req.body.a)
        const t:  number = Number(req.body.t)
        const luas = (a * t) / 2
        return res.status(200).json({
            status: true,
            a,
            t,
            luas
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
    })

    }
}

// export * from "./bangunRuang";