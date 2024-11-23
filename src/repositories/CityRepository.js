const CityRepository = {
  getCities: async (state) => {
    return await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`);
  }
};

export default CityRepository;
