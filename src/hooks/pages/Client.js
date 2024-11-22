import React, { useState, useEffect } from 'react';
import { ClientRepository } from '../../repositories/ClientRepository';
import Pagination from '../shared/Pagination';
import Loading from '../shared/Loading';
import Table from '../shared/Table';
import Header from '../shared/Header';

function Client() {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  const fetch = async (page = 1, filters = {}) => {
    try {
      setLoading(true);
      const response = await ClientRepository.getClients(page, 10, filters);
      setClients(response.list);
      setTotalPages(Math.ceil(response.total / 10));
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(currentPage, filters);
  }, [currentPage, filters]);

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    alert(`Editar cliente com ID: ${id}`);
  };

  const handleDelete = async (name, id) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o cliente: ${name}?`);

    if (confirmDelete) {
      try {
        const response = await ClientRepository.deleteClient(id);

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

  const columns = ["name", "cpf", 'dateBirth', "state", "cityName", "sex", "address"];
  const columnAliases = {
    name: "Cliente",
    cpf: "CPF",
    dateBirth: "Data de Nascimento",
    state: "Estado",
    cityName: "Cidade",
    sex: "Sexo",
    address: "Endereço",
  };

  const tableData = clients.map(client => ({
    id: client.id,
    name: client.name,
    cpf: client.cpf,
    sex: client.sex,
    address: client.address,
    cityName: client.city.cityName,
    state: client.city.state
  }));

  return (
    <div>
      <Header onSearch={handleSearch} />

      <div className="container">
        <div className="card mt-3 border border-dark">
          <div className="card-body">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <Table
                columns={columns}
                data={tableData}
                columnAliases={columnAliases}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />

              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;