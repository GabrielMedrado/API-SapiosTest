import { container } from 'tsyringe';

import { Request, Response } from 'express';
import { AppError } from '../../../../../errors/AppError';
import { DeleteAddressUseCase } from './DeleteAddressUseCase';

class DeleteAddressController {
  public async execute(req: Request, res: Response) {
    const deleteAddressUseCase = await container.resolve(DeleteAddressUseCase);
    const { id } = req.params as { id: string };

    try {
      await deleteAddressUseCase.execute(id);
      res.status(204).send();
    } catch (err) {
      throw new AppError('Endereço não encontrado', 404);
    }
  }
}

export { DeleteAddressController };
