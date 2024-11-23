import CityRepository from '../repositories/CityRepository';

const CityService = {
  getCities: async (state) => {
    try {
      const response = await CityRepository.getCities(state);
      return response;
    } catch (error) {
      console.error("Erro ao fazer requisição", error.message);
      return [];
    }
  }
};

export default CityService;