import React from 'react';
import Button from '../../components/Button';
import useClientRegister from '../../hooks/client/ClienteRegister';
import StateEnum from '../../support/enums/StateEnum';

function ClientRegister() {
  const { cities, formData, handleChange, handleSubmit, handleClear } = useClientRegister();

  return (
    <div className="container">
      <div className="card mt-3 border border-dark">
        <div className="card-body">
          <h6 className="text-left mt-3">Cadastro Cliente</h6>

          <form className="g-3 align-items-center mt-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-auto">
                <label htmlFor="cpf" className="col-form-label">CPF</label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  className="form-control"
                  value={formData.cpf}
                  placeholder="378.846.758-55"
                  maxLength="14"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-auto">
                <label htmlFor="name" className="col-form-label">Nome</label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-auto">
                <label htmlFor="date" className="col-form-label">Data de Nascimento</label>
              </div>
              <div className="col-auto">
                <input
                  type="date"
                  id="date"
                  name="date_birth"
                  className="form-control"
                  value={formData.date_birth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-auto d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    value="M"
                    id="M"
                    checked={formData.sex === 'M'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="M">Masculino</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    value="F"
                    id="F"
                    checked={formData.sex === 'F'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="F">Feminino</label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-auto">
                <label htmlFor="state" className="col-form-label">Estado</label>
              </div>
              <div className="col-auto">
                <select
                  className="form-select"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Todos</option>
                  {Object.keys(StateEnum).map((key) => (
                    <option key={key} value={StateEnum[key]}>
                      {StateEnum[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-auto">
                <label htmlFor="city_name" className="col-form-label">Cidade</label>
              </div>
              <div className="col-auto">
                <select
                  className="form-select"
                  name="city_name"
                  id="city_name"
                  value={formData.city_name}
                  onChange={handleChange}
                  required
                >
                  <option value="">Todos</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-auto">
                <label htmlFor="address" className="col-form-label">Endereço</label>
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <Button
                title="Enviar"
                color="primary"
                type="submit"
              />
              &nbsp;&nbsp;&nbsp;
              <Button
                title="Limpar"
                color="secondary"
                onClick={handleClear}
              />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default ClientRegister;