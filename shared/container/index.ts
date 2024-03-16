import { container } from 'tsyringe';
import { IClientRepository } from '../../src/modules/clients/repositories/ClientRepository.interface';
import { ClientRepository } from '../../src/modules/clients/repositories/implementation/ClientRepository';
import { IAdressRepository } from '../../src/modules/adress/repositories/AdressRepository.interface';
import { AdrresRepository } from '../../src/modules/adress/repositories/implementation/AdressRepository';

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
);

container.registerSingleton<IAdressRepository>(
  'AdrressRepository',
  AdrresRepository
);
