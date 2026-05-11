import React from 'react';

const PatientSummary = ({ patients, isLoading, error }) => {
  if (isLoading) return <p>Cargando historiales clínicos...</p>;
  if (error) return <p>Error al cargar los datos: {error}</p>;

  return (
    <div className="patient-summary">
      <h2>Historial de Pacientes (MediFlow)</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <strong>{patient.name}</strong> - Última consulta: {patient.lastVisit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientSummary;