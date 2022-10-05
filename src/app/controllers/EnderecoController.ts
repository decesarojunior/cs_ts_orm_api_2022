import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';
import Endereco from '../models/Endereco';

class EnderecoController {

    async list(req: Request, res: Response){

        const repository = getRepository(Endereco);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){

        const repository = getRepository(Endereco);
        console.log(req.body);
        const end = repository.create(req.body);
        await repository.save(end);
        return res.json(end);
    }
}

export default new EnderecoController();