import Button from "./Button.jsx";
import { useState } from "react";
export default function Carte({ titre, auteur, typeDoc, prets }) {
  const [ouvert, setOuvert] = useState(false);
  function boutonClique() {
    setOuvert(!ouvert);
  }
  return (
    <article className="carte">
      <h2 className="titre-livre">{titre}</h2>
      <p className="auteur">{auteur}</p>
      <p>{typeDoc}</p>

      <Button
        action={boutonClique}
        contenu={
          ouvert ? "Cacher le nombre de prêts" : "Afficher le nombre de prêts"
        }
      ></Button>
      {ouvert && <p className="prets">{prets}</p>}
    </article>
  );
}
