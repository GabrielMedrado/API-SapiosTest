import { Adress } from '@prisma/client';
import {
  ICreateAdressServieDTO,
  IUpdateAddressServieDTO,
} from '../dto/ICreateAdressServiceDTO';

export interface IAdressRepository {
  create(data: ICreateAdressServieDTO): Promise<Adress>;
  list(): Promise<any>;
  delete(id: string): Promise<any>;
  update({
    id,
    logradouro,
    numero,
    complemento,
    cidade,
    estado,
    cep,
  }: IUpdateAddressServieDTO): Promise<Adress>;
}
