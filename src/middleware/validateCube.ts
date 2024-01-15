import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

let schema = Joi.object({
    p: Joi.number().required().min(1),
    l: Joi.number().required().min(1),
    t: Joi.number().required().min(1)
});

let validateCube = (req: Request, res: Response, next: NextFunction) => {
    let {error} = schema.validate(req.body);

    if (error) {
        return res.status(400).json({message: error.details});
    }
    next();
}

export { validateCube }