import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState('');

  return (
    <div>
      <TemperatureInput
        value={temperature}
        onChangeTemp={setTemperature}
      />

      <p>
        {temperature !== ''
          ? `Valeur actuelle : ${temperature} °C`
          : 'Veuillez entrer une valeur'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;