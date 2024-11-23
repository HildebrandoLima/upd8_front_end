import { useState } from 'react';
import CityService from '../../services/CityService';
import { ClientService } from '../../services/ClientService';

const ClientUpdate = () => {
  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    cpf: '',
    name: '',
    date_birth: '',
    sex: '',
    state: '',
    city_name: '',
    address: '',
  });

  const fetchClient = async (id) => {
    try {
      const response = await ClientService.getClient(id);
      if (response.status === 200) {
        const data = response.data[0];
        setFormData({
            cpf: data.cpf,
            name: data.name || '',
            date_birth: data.dateBirth || '',
            sex: data.sex || '',
            state: data.city.state || '',
            city_name: data.city.cityName || '',
            address: data.address || '',
        });
      } else {
        console.error('Erro ao buscar os dados do cliente');
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do cliente:', error);
    }
  };

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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log('Formulário enviado:', formData);
  };

  const handleClear = () => {
    setFormData({
      cpf: '',
      name: '',
      date_birth: '',
      sex: '',
      state: '',
      city_name: '',
      address: '',
    });
    setErrors({});
  };

  return {
    cities,
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleClear,
    fetchClient,
    fetchCities,
  };
};

export default ClientUpdate;