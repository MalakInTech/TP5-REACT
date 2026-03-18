function TemperatureInput({ value, onChangeTemp }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChangeTemp(e.target.value)}
      placeholder="Entrer température"
    />
  );
}

export default TemperatureInput;
