import { ClientRepository } from '../repositories/ClientRepository';

export const ClientService = {
  getClients: async (page = 1, filters = {}) => {
    return await ClientRepository.getClients(page, 10, filters);
  },

  getClient: async (id) => {
    return await ClientRepository.getClient(id);
  },

  postClient: async (body) => {
    return await ClientRepository.postClient(body);
  },

  putClient: async (body) => {
    return await ClientRepository.putClient(body);
  },

  deleteClient: async (id) => {
    return await ClientRepository.deleteClient(id);
  }
};
