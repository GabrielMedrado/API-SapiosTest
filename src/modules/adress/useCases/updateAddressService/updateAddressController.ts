import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IUpdateAddressServieDTO } from '../../dto/ICreateAdressServiceDTO';
import { UpdateAddressUseCase } from './updateAddressUseCase';
import { AppError } from '../../../../../errors/AppError';

class UpdateAddressController {
  public async execute(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const { logradouro, numero, complemento, cidade, estado, cep } =
      req.body as IUpdateAddressServieDTO;

    try {
      const updateAddresseUseCase = await container.resolve(
        UpdateAddressUseCase
      );

      await updateAddresseUseCase.execute({
        id,
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      });

      return res
        .status(200)
        .json({ message: 'Endereço atualizado com sucesso !' });
    } catch (err) {
      throw new AppError('Id não localizado', 404);
    }
  }
}

export { UpdateAddressController };
