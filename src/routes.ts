import {Router} from 'express';
import JogadorController from  './app/controllers/JogadorController';
import EnderecoController from './app/controllers/EnderecoController';


const router = Router();

//criando uma rota para /jogadores.
router.post('/jogadores', JogadorController.store);
router.get('/jogadores', JogadorController.list);


router.post('/enderecos', EnderecoController.store);

router.get('/enderecos', EnderecoController.list);



export default router;

