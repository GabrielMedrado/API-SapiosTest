import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAdressUseCase } from './ListAddressUseCase';

class ListAdressController {
  public async execute(req: Request, res: Response) {
    const listAdressUseCase = await container.resolve(ListAdressUseCase);

    const adress = await listAdressUseCase.execute();

    return res.status(200).send(adress);
  }
}

export { ListAdressController };
