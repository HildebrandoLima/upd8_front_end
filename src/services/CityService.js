import { CityRepository } from '../repositories/CityRepository';

const CityService = {
  getCities: async (state) => {
    return await CityRepository.getCities(state);
  }
};

export default CityService;