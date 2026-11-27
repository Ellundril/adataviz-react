import Button from "./Button.jsx";
import { useState } from "react";
export default function Carte({
  titre,
  auteur,
  typeDoc,
  prets,
  offset = "0s",
}) {
  const [ouvert, setOuvert] = useState(false);
  function boutonClique() {
    setOuvert(!ouvert);
  }
  return (
    <article className="carte" style={{ "--offset": offset }}>
      <h2 className="titre-livre">{titre}</h2>
      <p className="auteur">{auteur}</p>
      <p className="type-doc">{typeDoc}</p>

      <Button
        action={boutonClique}
        contenu={
          ouvert ? "Cacher le nombre de prêts" : "Afficher le nombre de prêts"
        }
        classe="btn-standard"
      ></Button>
      {ouvert && <p className="prets">{prets}</p>}
    </article>
  );
}
