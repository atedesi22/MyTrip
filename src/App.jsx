// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyTripLanding from './features/discovery/MyTripLanding'; // Chemin basé sur la structure dossiers définie

/**
 * App.jsx - Point d'entrée principal de MyTrip (NovaVerse)
 * Gère le routage et l'état global du client React.
 */
function App() {
  return (
    <Router>
      <div className="App selection:bg-nova-cyan selection:text-slate-900">
        <Routes>
          {/* Route de la Landing Page Bluffante */}
          <Route path="/" element={<MyTripLanding />} />

          {/* Futures routes à implémenter :
              <Route path="/map" element={<NovaMapContainer />} />
              <Route path="/book" element={<TravelDashboard />} />
              <Route path="/auth" element={<NovaAuth />} /> 
          */}
        </Routes>

        {/* Overlay global optionnel (ex: notifications, indicateur de chargement NovaVerse)
            ou barre de navigation NativePHP persistante.
        */}
      </div>
    </Router>
  );
}

export default App;