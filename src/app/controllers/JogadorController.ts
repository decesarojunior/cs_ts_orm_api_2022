import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';

class JogadorController {

    async list(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Jogador);

        console.log(req.body);

        const {nickname} = req.body;

        const nicknameExists = await repository.findOne({where : {nickname}});

        if(nicknameExists){

            return res.sendStatus(409);

        }

        const j = repository.create(req.body);

        await repository.save(j);

        return res.json(j);
        
    }
}

export default new JogadorController();