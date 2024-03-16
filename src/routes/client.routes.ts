import { Router } from 'express';
import { CreateClienteController } from '../modules/clients/useCase/createClientService/CreateClienteController';
import { ListClientController } from '../modules/clients/useCase/listClientService/ListClientController';
import { DeleteClientController } from '../modules/clients/useCase/deleteClienteService/DeleteClientController';
import { UpdateClienteController } from '../modules/clients/useCase/updateClientService/UpdateClientController';

const clientRoutes = Router();

const createClientController = new CreateClienteController();
const listClientsController = new ListClientController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClienteController();

clientRoutes.post('/create', createClientController.execute);
clientRoutes.get('/list', listClientsController.execute);
clientRoutes.delete('/delete/:id', deleteClientController.execute);
clientRoutes.put('/atualizar/:id', updateClientController.execute);

export { clientRoutes };
