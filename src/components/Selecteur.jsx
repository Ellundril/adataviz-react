import { creerFiltre } from "../utils.js";
export default function Selecteur({ liste, optionChoisie, action }) {
  const filtres = creerFiltre(liste);
  return (
    <select onChange={action} value={optionChoisie}>
      {filtres.map((type) => {
        return <option key={type}>{type}</option>;
      })}
    </select>
  );
}
