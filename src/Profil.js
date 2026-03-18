import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const handleLogout = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <h4>Bonjour {utilisateur.nom}</h4>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Utilisateur non connecté</p>
      )}
    </div>
  );
}

export default Profil;