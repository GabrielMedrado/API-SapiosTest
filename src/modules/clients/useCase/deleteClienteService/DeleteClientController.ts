import { container } from 'tsyringe';
import { DeleteClientUseCase } from './DeleteClienteUseCase';
import { Request, Response } from 'express';
import { AppError } from '../../../../../errors/AppError';

class DeleteClientController {
  public async execute(req: Request, res: Response) {
    const deleteClientseUseCase = await container.resolve(DeleteClientUseCase);
    const { id } = req.params as { id: string };

    try {
      await deleteClientseUseCase.execute(id);
      res.status(204).send();
    } catch (err) {
      throw new AppError('Cliente não encontrado', 404);
    }
  }
}

export { DeleteClientController };
