export default function Carte({ titre, auteur, typeDoc, prets }) {
  return (
    <article className="carte">
      <h2 className="titre-livre">{titre}</h2>
      <p className="auteur">{auteur}</p>
      <p>{typeDoc}</p>
      <p className="prets">{prets}</p>
    </article>
  );
}
