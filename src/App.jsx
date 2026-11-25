import Entete from "./components/Entete";
import Carte from "./components/Carte";
import { donnees } from "./donnees.js";
import NombredeTitres from "./components/NombreDeTitres.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";
import Selecteur from "./components/Selecteur.jsx";

function App() {
  const [recherche, setRecherche] = useState("");
  const [optionChoisie, setOptionChoisie] = useState("tous");

  function displayLivre() {
    if (recherche.length === 0 && optionChoisie === "tous") {
      return donnees;
    } else if (optionChoisie !== "tous") {
      return donnees.filter(
        (livre) =>
          livre.titre.toLowerCase().includes(recherche.trim().toLowerCase()) &&
          livre.typeDoc === optionChoisie,
      );
    } else {
      return donnees.filter((livre) =>
        livre.titre.toLowerCase().includes(recherche.trim().toLowerCase()),
      );
    }
  }

  function effacer() {
    setRecherche("");
  }
  return (
    <>
      <Entete></Entete>
      <Selecteur
        liste={donnees}
        optionChoisie={optionChoisie}
        action={(e) => setOptionChoisie(e.target.value)}
      ></Selecteur>
      <p>Option choisie : {optionChoisie}</p>
      <label htmlFor="recherche"></label>
      <input
        type="search"
        id="recherche"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      <Button action={effacer} contenu="effacer"></Button>
      <section className="cartes">
        {displayLivre().length > 0 ? (
          displayLivre().map((livre) => (
            <Carte
              key={livre.id}
              titre={livre.titre}
              auteur={livre.auteur}
              typeDoc={livre.typeDoc}
              prets={livre.prets}
            ></Carte>
          ))
        ) : (
          <p> Aucun livre ne correspond à votre recherche</p>
        )}
      </section>
      <NombredeTitres longueur={displayLivre().length}></NombredeTitres>
    </>
  );
}

export default App;
