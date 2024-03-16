import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IUpdateClientDTO } from '../../dto/ICreateClientServiceDTO';
import { UpdateClientUseCase } from './UpdateClientUseCase';
import { AppError } from '../../../../../errors/AppError';

class UpdateClienteController {
  public async execute(req: Request, res: Response) {
    const { id } = req.query as { id: string };
    const { cnpj, razao_social, nome_do_contato, telefone } =
      req.body as IUpdateClientDTO;

    try {
      const updateClienteUseCase = await container.resolve(UpdateClientUseCase);

      await updateClienteUseCase.execute({
        id,
        cnpj,
        razao_social,
        nome_do_contato,
        telefone,
      });

      return res
        .status(200)
        .json({ message: 'Registro atualizado com sucesso !' });
    } catch (err) {
      throw new AppError('Id não localizado', 404);
    }
  }
}

export { UpdateClienteController };
