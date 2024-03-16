import { injectable, inject } from 'tsyringe';

import { IClientRepository } from '../../repositories/ClientRepository.interface';
import { Client } from '@prisma/client';

interface IRequest {
  cnpj: string;
  nome_do_contato: string;
  razao_social: string;
  telefone: number;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(input: IRequest): Promise<Client> {
    const client = await this.clientRepository.create({
      cnpj: input.cnpj,
      nome_do_contato: input.nome_do_contato,
      razao_social: input.razao_social,
      telefone: input.telefone,
    });

    return client;
  }
}

export { CreateClientUseCase };
