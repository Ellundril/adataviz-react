export default function Selecteur({
  liste,
  optionChoisie,
  action,
  choixSelect,
}) {
  const filtres = choixSelect(liste);
  return (
    <select onChange={action} value={optionChoisie}>
      {filtres.map((type) => {
        return (
          <option key={type} value={type}>
            {type}
          </option>
        );
      })}
    </select>
  );
}
