import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import PainelAdmin from './Pages/PainelAdmin';
import Header from './Components/Header';
import Pets from './Pages/Pets/Pets';
import { GlobalStorage } from './Components/GlobalStorage';
import Adotante from './Pages/Adotante/Adotante';
import Adocao from './Pages/Adocao/Adocao';
import AdicionarPet from './Pages/Pets/AdicionarPet';
import EditarPet from './Pages/Pets/EditarPet';
import AdicionarAdotante from './Pages/Adotante/AdicionarAdotante';
import AdicionarAdocao from './Pages/Adocao/AdicionarAdocao';
import EditarAdotante from './Pages/Adotante/EditarAdotante';
import EditarAdocao from './Pages/Adocao/EditarAdocao';
import './App.css';

function App() {
  return (
    <div className="geral">
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="painelAdmin/*" element={<Header />}>
              <Route path="" element={<PainelAdmin />} />
              {/* Pets */}
              <Route path="pets" element={<Pets />} />
              <Route path="pets/adicionar" element={<AdicionarPet />} />
              <Route path="pets/editar/:id" element={<EditarPet />} />
              {/* Adotantes */}
              <Route path="adotantes" element={<Adotante />} />
              <Route
                path="adotantes/adicionar"
                element={<AdicionarAdotante />}
              />
              <Route path="adotantes/editar/:id" element={<EditarAdotante />} />
              {/* Adoções */}
              <Route path="adocoes" element={<Adocao />} />
              <Route path="adocoes/adicionar" element={<AdicionarAdocao />} />
              <Route path="adocoes/editar/:id" element={<EditarAdocao />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </div>
  );
}

export default App;
