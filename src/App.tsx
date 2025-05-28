import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Upload from './components/Upload';
import Results from './components/Results';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  const handleLogin = (newToken: string) => {
    setToken(newToken);
  };

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
            token ? (
              <Results results={results} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;