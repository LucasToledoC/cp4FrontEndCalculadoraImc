import React from 'react';
import '../css/historicoMedicoes.css';

function HistoricoMedicoes({ medicoes }) {
    return (
        <div className="historico-medicoes-container box">
            <h2>Histórico de Medições</h2>
            {medicoes.length === 0 ? (
                <p>Nenhuma medição registrada ainda.</p>
            ) : (
                <div className="historico-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Altura (m)</th>
                                <th>Peso (kg)</th>
                                <th>IMC</th>
                                <th>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicoes.map((medicao, index) => (
                                <tr key={index}>
                                    <td>{medicao.data}</td>
                                    <td>{medicao.altura}</td>
                                    <td>{medicao.peso}</td>
                                    <td>{medicao.imc}</td>
                                    <td>{medicao.classificacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default HistoricoMedicoes;

