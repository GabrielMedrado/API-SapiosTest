import { inject, injectable } from 'tsyringe';

import { Adress } from '@prisma/client';
import { IAdressRepository } from '../../repositories/AdressRepository.interface';
import { IUpdateAddressServieDTO } from '../../dto/ICreateAdressServiceDTO';

@injectable()
class UpdateAddressUseCase {
  constructor(
    @inject('AdrressRepository')
    private addressRepositoryRepository: IAdressRepository
  ) {}

  async execute({
    id,
    logradouro,
    numero,
    complemento,
    cidade,
    estado,
    cep,
  }: IUpdateAddressServieDTO): Promise<Adress> {
    const data = await this.addressRepositoryRepository.update({
      id,
      logradouro,
      numero,
      complemento,
      cidade,
      estado,
      cep,
    });

    return data;
  }
}

export { UpdateAddressUseCase };
