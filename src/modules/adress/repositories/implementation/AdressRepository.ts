import prismaClient from '../../../../config/prisma';

import { Adress } from '@prisma/client';
import {
  ICreateAdressServieDTO,
  IUpdateAddressServieDTO,
} from '../../dto/ICreateAdressServiceDTO';
import { IAdressRepository } from '../AdressRepository.interface';
import { AppError } from '../../../../../errors/AppError';

class AdrresRepository implements IAdressRepository {
  constructor() {}

  async update({
    id,
    logradouro,
    numero,
    complemento,
    cidade,
    estado,
    cep,
  }: IUpdateAddressServieDTO): Promise<Adress> {
    const result = await prismaClient.adress.update({
      where: {
        id: id,
      },
      data: {
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      },
    });

    return result;
  }
  async create(data: ICreateAdressServieDTO): Promise<Adress> {
    const adress = await prismaClient.adress.create({
      data: {
        cep: data.cep,
        cidade: data.cidade,
        complemento: data.complemento,
        estado: data.estado,
        logradouro: data.logradouro,
        numero: data.numero,
      },
    });

    return adress;
  }
  async list(): Promise<any> {
    const adresses = await prismaClient.adress.findMany();

    return adresses;
  }
  async delete(id: string): Promise<any> {
    if (!id) {
      throw new AppError('Solicitação inválida');
    }

    const findAdress = await prismaClient.adress.findFirst({
      where: {
        id: id,
      },
    });

    if (!findAdress) {
      throw new AppError('Endereço não encontrado', 404);
    }

    await prismaClient.adress.delete({
      where: {
        id: findAdress.id,
      },
    });

    return { message: 'Deletado com sucesso !' };
  }
}

export { AdrresRepository };
