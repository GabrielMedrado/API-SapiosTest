import { inject, injectable } from 'tsyringe';
import { IAdressRepository } from '../../repositories/AdressRepository.interface';

@injectable()
class ListAdressUseCase {
  constructor(
    @inject('AdrressRepository')
    private addressRepositoryRepository: IAdressRepository
  ) {}

  public async execute() {
    const adresses = await this.addressRepositoryRepository.list();
    return adresses;
  }
}

export { ListAdressUseCase };
