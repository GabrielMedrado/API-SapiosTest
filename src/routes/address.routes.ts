import { Router } from 'express';
import { CreateAdressController } from '../modules/adress/useCases/createAddressService/CreateAddressController';
import { ListAdressController } from '../modules/adress/useCases/listAddressService/ListAddressController';
import { DeleteAddressController } from '../modules/adress/useCases/deleteAdressService/DeleteAddressController';
import { UpdateAddressController } from '../modules/adress/useCases/updateAddressService/updateAddressController';

const addressRoutes = Router();

const createAdressController = new CreateAdressController();
const listAdressController = new ListAdressController();
const deleteAdressController = new DeleteAddressController();
const updateAddressController = new UpdateAddressController();

addressRoutes.post('/create', createAdressController.execute);
addressRoutes.get('/list', listAdressController.execute);
addressRoutes.delete('/delete/:id', deleteAdressController.execute);
addressRoutes.put('/atualizar/:id', updateAddressController.execute);

export { addressRoutes };
