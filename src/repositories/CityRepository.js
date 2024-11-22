export const CityRepository = {
  getCities: async (state) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`);
      return response;
    } catch (error) {
      console.error("Erro ao fazer requisição", error.message);
      return [];
    }
  }
};
