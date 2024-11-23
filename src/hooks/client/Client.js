import { useState, useEffect } from 'react';
import { ClientService } from '../../services/ClientService';

export function useClient() {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const fetchClients = async (page = 1, filters = {}) => {
    try {
      setLoading(true);
      const response = await ClientService.getClients(page, filters);
      setClients(response.list);
      setTotalPages(Math.ceil(response.total / 10));
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients(currentPage, filters);
  }, [currentPage, filters]);

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
    setCurrentPage(1);
  };

  const handleDelete = async (name, id) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o cliente: ${name}?`);
    if (confirmDelete) {
      try {
        const response = await ClientService.deleteClient(id);
        if (response === 200) {
          setClients(clients.filter(client => client.id !== id));
          alert(`Cliente: ${name} excluído com sucesso.`);
        } else {
          alert("Erro ao excluir o cliente.");
        }
      } catch (error) {
        console.error("Erro ao excluir o cliente", error);
        alert("Ocorreu um erro ao excluir o cliente.");
      }
    }
  };

  return { clients, loading, currentPage, totalPages, handleSearch, handleDelete, setCurrentPage };
}
