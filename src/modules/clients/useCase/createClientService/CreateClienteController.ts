import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateClientServiceDTO } from '../../dto/ICreateClientServiceDTO';
import { CreateClientUseCase } from './CreateClientUseCase';
import { AppError } from '../../../../../errors/AppError';

class CreateClienteController {
  public async execute(req: Request, res: Response) {
    const { cnpj, razao_social, nome_do_contato, telefone } =
      req.body as ICreateClientServiceDTO;

    if (!cnpj || !razao_social || !nome_do_contato || !telefone) {
      throw new AppError(
        'Obrigatório o preenchimento de todas as propriedades',
        400
      );
    }

    try {
      const createClienteUseCase = await container.resolve(CreateClientUseCase);

      await createClienteUseCase.execute({
        cnpj,
        razao_social,
        nome_do_contato,
        telefone,
      });

      return res.status(201).json({ message: 'Registro criado com sucesso !' });
    } catch (err) {
      throw new AppError(
        'Erro na solicitação, verifique se o valor dos dados foram preenchidos corretamente',
        400
      );
    }
  }
}

export { CreateClienteController };
