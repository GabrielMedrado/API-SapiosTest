import { Request, Response } from 'express';
import { ICreateAdressServieDTO } from '../../dto/ICreateAdressServiceDTO';
import { container } from 'tsyringe';
import { CreateAdressUseCase } from './CreateAddressUseCase';

class CreateAdressController {
  public async execute(req: Request, res: Response) {
    const { logradouro, numero, complemento, cidade, estado, cep } =
      req.body as ICreateAdressServieDTO;

    if (!logradouro || !numero || !cidade || !estado || !cep) {
      res
        .status(400)
        .json({ message: 'As propriedades devem ser preenchidas' });
      return;
    }

    if (complemento === '') {
      res
        .status(400)
        .json('A propriedade complemento não deve estar sem valor');
      return;
    }

    try {
      const createAdressUseCase = await container.resolve(CreateAdressUseCase);

      await createAdressUseCase.execute({
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      });

      return res.status(201).json({ message: 'Registro criado com sucesso !' });
    } catch (err) {
      res.status(400).json({
        message:
          'Erro na solicitação, verifique se o valor dos dados foram preenchidos corretamente',
      });
      return;
    }
  }
}

export { CreateAdressController };
