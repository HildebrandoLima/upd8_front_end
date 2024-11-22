import React from 'react';
import Button from '../shared/Button';

function Table({ columns, data, columnAliases, onEdit, onDelete }) {
  return (
    <div class="table-responsive">
        <table className="table table-striped table-hover mt-3">
            <thead>
                <tr>
                <th>Ação</th>
                <th>Ação</th>
                {columns.map((column) => (
                    <th key={column}>{columnAliases[column] || column}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>
                    <Button
                        title="Editar"
                        color="success"
                        onClick={() => onEdit(item.id)}
                    />
                    </td>
                    <td>
                    <Button
                        title="Excluir"
                        color="danger"
                        onClick={() => onDelete(item.name, item.id)}
                    />
                    </td>
                    {columns.map((column) => (
                    <td key={column}>{item[column]}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Table;