import React, { useState, useEffect } from 'react';
import PatientSummary from '../presentational/PatientSummary';

const PatientPortalContainer = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando la llamada al endpoint del BFF de MediFlow
    const fetchPatients = async () => {
      try {
        // fetch('http://localhost:8080/api/bff/patients')
        const mockData = [
          { id: 1, name: 'Ana Silva', lastVisit: '2025-10-12' },
          { id: 2, name: 'Carlos Gomez', lastVisit: '2025-11-05' }
        ];
        setPatients(mockData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Delega la representación visual al componente Presentational
  return <PatientSummary patients={patients} isLoading={isLoading} error={error} />;
};

export default PatientPortalContainer;