import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListClientsUseCase } from './ListClientUseCase';

class ListClientController {
  public async execute(req: Request, res: Response) {
    const listClientseUseCase = await container.resolve(ListClientsUseCase);

    const clients = await listClientseUseCase.execute();

    return res.status(200).send(clients);
  }
}

export { ListClientController };
