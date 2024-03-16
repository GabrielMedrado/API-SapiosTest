import { Client } from '@prisma/client';
import {
  ICreateClientServiceDTO,
  IUpdateClientDTO,
} from '../dto/ICreateClientServiceDTO';

export interface IClientRepository {
  create(data: ICreateClientServiceDTO): Promise<Client>;
  listAll(): Promise<any>;
  delete(id: string): Promise<any>;
  update({
    id,
    cnpj,
    razao_social,
    nome_do_contato,
    telefone,
  }: IUpdateClientDTO): Promise<Client>;
}
