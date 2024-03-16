import { inject, injectable } from 'tsyringe';
import { IClientRepository } from '../../repositories/ClientRepository.interface';

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(id: string) {
    const deleteClient = await this.clientRepository.delete(id);

    return deleteClient;
  }
}

export { DeleteClientUseCase };
