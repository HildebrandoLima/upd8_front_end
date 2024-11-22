import { useState } from 'react';
import CityService from '../../services/CityService';

function useHeaderHook(onSearch) {
  const [searchParams, setSearchParams] = useState({
    cpf: '',
    name: '',
    date_birth: '',
    sex: '',
    state: '',
    city: ''
  });

  const [cities, setCities] = useState([]);

  const fetchCities = async (state) => {
    if (!state) return;

    try {
      const response = await CityService.getCities(state);
  
      if (response.ok) {
        const data = await response.json();
        const citiesList = data.map(district => district.nome);
        setCities(citiesList);
      } else {
        console.error('Falha ao obter dados:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'state') {
      fetchCities(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const handleClear = () => {
    setSearchParams({
      name: '',
      cpf: '',
      date_birth: '',
      sex: '',
      state: '',
      city: ''
    });
    onSearch({});
  };

  return {
    searchParams,
    cities,
    handleChange,
    handleSubmit,
    handleClear,
  };
}

export default useHeaderHook;