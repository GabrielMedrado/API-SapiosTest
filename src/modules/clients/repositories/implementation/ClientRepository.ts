import prismaClient from '../../../../config/prisma';

import { Client } from '@prisma/client';
import { IClientRepository } from '../ClientRepository.interface';
import { AppError } from '../../../../../errors/AppError';
import {
  ICreateClientServiceDTO,
  IUpdateClientDTO,
} from '../../dto/ICreateClientServiceDTO';

class ClientRepository implements IClientRepository {
  constructor() {}

  async create(data: ICreateClientServiceDTO): Promise<Client> {
    const customer = await prismaClient.client.create({
      data: {
        cnpj: data.cnpj,
        razao_social: data.razao_social,
        nome_do_contato: data.nome_do_contato,
        telefone: data.telefone,
      },
    });

    return customer;
  }

  async listAll(): Promise<any> {
    const clients = await prismaClient.client.findMany();

    return clients;
  }

  async delete(id: any): Promise<any> {
    if (!id) {
      throw new AppError('Solicitação inválida');
    }

    const findCustomer = await prismaClient.client.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new AppError('Cliente não encontrado', 404);
    }

    await prismaClient.client.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: 'Deletado com sucesso !' };
  }

  async update({
    id,
    cnpj,
    razao_social,
    nome_do_contato,
    telefone,
  }: IUpdateClientDTO): Promise<Client> {
    const result = await prismaClient.client.update({
      where: {
        id: id,
      },
      data: {
        cnpj,
        razao_social,
        nome_do_contato,
        telefone,
      },
    });

    return result;
  }
}

export { ClientRepository };
