import api from '../config/api';

const ClientRepository = {
  getClients: async (queryParams) => {
    return await api.get(`client?${queryParams}`);
  },

  getClient: async (id) => {
    return await api.get(`client/${id}`);
  },

  postClient: async (body) => {
    return await api.post(`client/create`, body);
  },

  putClient: async (body) => {
    return await api.put(`client/update`, body);
  },

  deleteClient: async (id) => {
    return await api.delete(`client/delete/${id}`);
  }
};

export default ClientRepository;