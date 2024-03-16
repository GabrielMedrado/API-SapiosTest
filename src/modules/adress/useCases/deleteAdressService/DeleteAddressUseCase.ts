import { inject, injectable } from 'tsyringe';
import { IAdressRepository } from '../../repositories/AdressRepository.interface';

@injectable()
class DeleteAddressUseCase {
  constructor(
    @inject('AdrressRepository')
    private addressRepository: IAdressRepository
  ) {}

  async execute(id: string) {
    const deleteAddress = await this.addressRepository.delete(id);

    return deleteAddress;
  }
}

export { DeleteAddressUseCase };
