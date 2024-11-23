import { useState, useEffect  } from 'react';
import CityService from '../../services/CityService';

function useHeaderHook(onSearch) {
  const [cities, setCities] = useState([]);
  const [searchParams, setSearchParams] = useState({
    cpf: '',
    name: '',
    date_birth: '',
    sex: '',
    state: '',
    city: ''
  });

  const fetchCities = async () => {
    try {
      const response = await CityService.getCities();
      if (response.status === 200) {
        setCities(response.data);
      } else {
        console.error('Falha ao obter dados:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
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