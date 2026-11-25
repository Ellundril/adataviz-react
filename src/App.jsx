import Entete from "./components/Entete";
import Carte from "./components/Carte";
import { donnees } from "./donnees.js";
import NombredeTitres from "./components/NombreDeTitres.jsx";
import { useState } from "react";

function App() {
  const [recherche, setRecherche] = useState([]);
  function displayLivre() {
    if (recherche.length === 0) {
      return donnees;
    }
    const livresFiltres = donnees.filter((livre) =>
      livre.titre.toLowerCase().includes(recherche.trim().toLowerCase()),
    );
    return livresFiltres;
  }
  return (
    <>
      <Entete></Entete>
      <label htmlFor="recherche"></label>
      <input
        type="search"
        id="recherche"
        onChange={(e) => setRecherche(e.target.value)}
      />
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
      <NombredeTitres longueur={donnees.length}></NombredeTitres>
    </>
  );
}

export default App;
