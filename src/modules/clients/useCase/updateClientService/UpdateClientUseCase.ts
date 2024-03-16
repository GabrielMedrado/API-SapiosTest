import { inject, injectable } from 'tsyringe';
import { IClientRepository } from '../../repositories/ClientRepository.interface';
import { Client } from '@prisma/client';
import { IUpdateClientDTO } from '../../dto/ICreateClientServiceDTO';

@injectable()
class UpdateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute({
    id,
    cnpj,
    nome_do_contato,
    razao_social,
    telefone,
  }: IUpdateClientDTO): Promise<Client> {
    const data = await this.clientRepository.update({
      id,
      cnpj,
      nome_do_contato,
      razao_social,
      telefone,
    });

    return data;
  }
}

export { UpdateClientUseCase };
