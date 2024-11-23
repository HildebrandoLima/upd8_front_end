import api from '../config/api';

export const ClientRepository = {
  getClients: async (page = 1, perPage = 10, filters = {}) => {
    const queryParams = new URLSearchParams({
      page,
      perPage,
      ...filters,
    }).toString();

    try {
      const response = await api.get(`client?${queryParams}`);
      return response.data.data;
    } catch (error) {
      console.error("Erro ao fazer requisição", error.message);
      return { list: [], total: 0 };
    }
  },

  postClient: async (body) => {
    try {
      const response = await api.post(`client/create`, body);
      return response;
    } catch (error) {
      console.error("Erro ao fazer requisição", error.message);
      return error;
    }
  },

  deleteClient: async (id) => {
    try {
      const response = await api.delete(`client/delete/${id}`);
      return response.status;
    } catch (error) {
      console.error("Erro ao fazer requisição", error.message);
      return 400;
    }
  }
};
