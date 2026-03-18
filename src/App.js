import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [user, setUser] = useState({
    nom: 'Kaoutar',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur: user, setUtilisateur: setUser }}>
      <div style={{ margin: '20px' }}>
        <h1>Mini TP React</h1>

        <h3>Formulaire contrôlé</h3>
        <FormulaireControle />

        <h3>Formulaire non contrôlé</h3>
        <FormulaireNonControle />

        <h3>Température</h3>
        <TemperatureConvertor />

        <h3>Profil</h3>
        <Profil />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;
