import { inject, injectable } from 'tsyringe';
import { Adress } from '@prisma/client';
import { IAdressRepository } from '../../repositories/AdressRepository.interface';
import { ICreateAdressServieDTO } from '../../dto/ICreateAdressServiceDTO';

@injectable()
class CreateAdressUseCase {
  constructor(
    @inject('AdrressRepository')
    private addressRepository: IAdressRepository
  ) {}

  async execute(input: ICreateAdressServieDTO): Promise<Adress> {
    const adress = await this.addressRepository.create({
      logradouro: input.logradouro,
      numero: input.numero,
      complemento: input.complemento,
      cidade: input.cidade,
      estado: input.estado,
      cep: input.cep,
    });

    return adress;
  }
}

export { CreateAdressUseCase };
