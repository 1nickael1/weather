export default function KelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return `${celsius.toFixed(1)}°C`;
}
