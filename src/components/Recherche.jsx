export default function Recherche({ recherche, action }) {
  return (
    <>
      <label htmlFor="recherche"></label>
      <input type="search" id="recherche" value={recherche} onChange={action} />
    </>
  );
}
