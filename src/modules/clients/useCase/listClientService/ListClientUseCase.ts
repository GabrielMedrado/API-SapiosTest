import { inject, injectable } from 'tsyringe';
import { IClientRepository } from '../../repositories/ClientRepository.interface';

@injectable()
class ListClientsUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute() {
    const clients = await this.clientRepository.listAll();

    return clients;
  }
}

export { ListClientsUseCase };
