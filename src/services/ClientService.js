import { ClientRepository } from '../repositories/ClientRepository';

export const ClientService = {
  getClients: async (page = 1, filters = {}) => {
    return await ClientRepository.getClients(page, 10, filters);
  },

  deleteClient: async (id) => {
    return await ClientRepository.deleteClient(id);
  }
};
