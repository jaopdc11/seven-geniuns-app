import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Upload from './components/Upload';
import Results from './components/Results';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  // Função para simular login e salvar token
  const handleLogin = (newToken: string) => {
    setToken(newToken);
  };

  // Função para salvar resultados do upload/processamento
  const handleSetResults = (data: any) => {
    setResults(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/upload" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/upload"
          element={
            token ? (
              <Upload token={token} onResults={handleSetResults} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/results"
          element={
              <Results results={results} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;