import { useRef } from 'react';

function FormulaireNonControle() {
  const nomInput = useRef(null);
  const emailInput = useRef(null);

  const envoyerFormulaire = (e) => {
    e.preventDefault();
    alert(`Nom : ${nomInput.current.value} | Email : ${emailInput.current.value}`);
  };

  return (
    <form onSubmit={envoyerFormulaire}>
      <input type="text" ref={nomInput} placeholder="Nom" />
      <input type="email" ref={emailInput} placeholder="Email" />
      <button type="submit">Valider</button>
    </form>
  );

}

export default FormulaireNonControle;