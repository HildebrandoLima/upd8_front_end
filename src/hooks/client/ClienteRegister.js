import { useState, useEffect } from 'react';
import CityService from '../../services/CityService';
import { ClientService } from '../../services/ClientService';

function useClientRegister() {
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        cpf: '',
        name: '',
        date_birth: '',
        sex: '',
        state: '',
        city: '',
        address: '',
    });
    const [errors, setErrors] = useState({});

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

    useEffect(() => {
        if (formData.state) {
            fetchCities(formData.state);
        }
    }, [formData.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await ClientService.postClient(formData);
            if (response.status === 200) {
                alert('Cadastro realizado com sucesso!');
                setErrors({});
            } else {
                const { data } = response;
                console.log('Erro:', data);
                setErrors(data.error || {});
                alert(data.message || 'Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error("Erro ao enviar os dados", error);
            alert('Ocorreu um erro ao enviar o formulário!');
        }
    };

    const handleClear = () => {
        setFormData({
            cpf: '',
            name: '',
            date_birth: '',
            sex: '',
            state: '',
            city: '',
            address: '',
        });
        setCities([]);
        setErrors({}); // Limpar os erros ao limpar o formulário
    };

    return {
        cities,
        formData,
        handleChange,
        handleSubmit,
        handleClear,
        errors, // Expor o estado de erros para o componente
    };
}

export default useClientRegister;
