import Button from "./Button.jsx";

export default function Carte({ titre, auteur, typeDoc, prets }) {
  function boutonClique() {
    console.log(titre);
  }
  return (
    <article className="carte">
      <h2 className="titre-livre">{titre}</h2>
      <p className="auteur">{auteur}</p>
      <p>{typeDoc}</p>
      <p className="prets">{prets}</p>
      <Button action={boutonClique}></Button>
    </article>
  );
}
