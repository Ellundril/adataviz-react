import Entete from "./components/Entete";
import Carte from "./components/Carte";
import NombredeTitres from "./components/NombreDeTitres.jsx";
import Button from "./components/Button.jsx";
import { useState, useEffect } from "react";
import Selecteur from "./components/Selecteur.jsx";
import Recherche from "./components/Recherche.jsx";
import {
  formaterListe,
  creerFiltreAuteur,
  creerFiltreTypeDoc,
  trierPrets,
} from "./utils.js";

function App() {
  const [recherche, setRecherche] = useState("");
  const [optionChoisie, setOptionChoisie] = useState("tous");
  const [auteurChoisi, setAuteurChoisi] = useState("tous");
  const [livres, setLivres] = useState([]);
  const [erreur, setErreur] = useState(false);
  const [chargement, setChargement] = useState(true);
  const URL =
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-titres-les-plus-pretes/records?limit=100";

  function displayLivre() {
    if (
      recherche.length === 0 &&
      optionChoisie === "tous" &&
      auteurChoisi === "tous"
    ) {
      return livres;
    }

    let typeLivre = livres;
    let auteurLivre = livres;
    let rechercheLivre = livres;

    if (optionChoisie !== "tous") {
      typeLivre = livres.filter((livre) => livre.typeDoc === optionChoisie);
    }
    if (auteurChoisi !== "tous") {
      auteurLivre = livres.filter((livre) => livre.auteur === auteurChoisi);
    }
    if (recherche.length !== 0) {
      rechercheLivre = livres.filter((livre) =>
        livre.titre.toLowerCase().includes(recherche.trim().toLowerCase()),
      );
    }
    if (
      recherche.length !== 0 ||
      optionChoisie !== "tous" ||
      auteurChoisi !== "tous"
    ) {
      const communs = rechercheLivre.filter((livre) =>
        auteurLivre.includes(livre),
      );

      const communsFinal = communs.filter((livre) => typeLivre.includes(livre));

      return communsFinal;
    }
  }

  function effacer() {
    setRecherche("");
    setOptionChoisie("tous");
    setAuteurChoisi("tous");
  }

  useEffect(() => {
    async function getLivres() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const resultat = await response.json();
        setLivres(formaterListe(resultat.results));
      } catch (erreur) {
        console.log(erreur.message);
        setErreur(true);
      } finally {
        console.log("données recupérées");
        setChargement(false);
      }
    }
    getLivres();
  }, []);
  return (
    <>
      <Entete></Entete>
      {!erreur && (
        <section className="filtres">
          {/* <button className="btn-affichage-filtres">Afficher les filtres</button> */}
          <div className="filtre-select">
            <Selecteur
              choixSelect={creerFiltreTypeDoc}
              liste={livres}
              optionChoisie={optionChoisie}
              action={(e) => setOptionChoisie(e.target.value)}
            ></Selecteur>
            <Selecteur
              choixSelect={creerFiltreAuteur}
              liste={livres}
              optionChoisie={auteurChoisi}
              action={(e) => setAuteurChoisi(e.target.value)}
            ></Selecteur>
            <Recherche
              recherche={recherche}
              action={(e) => setRecherche(e.target.value)}
            ></Recherche>
            <Button action={effacer} contenu="effacer"></Button>
            <div className="btn-ordre">
              <Button
                className="tri-nb-de-prets-decroissant"
                action={() => {
                  setLivres(trierPrets(livres, "décroissant"));
                }}
                aria-label="trier les livres par ordre décroissant de prêts"
                contenu={"⬇️"}
              ></Button>
              <Button
                className="tri-nb-de-prets-croissant"
                action={() => {
                  setLivres(trierPrets(livres, "croissant"));
                }}
                aria-label="trier les livres par ordre croissant de prêts"
                contenu={"⬆️"}
              ></Button>
            </div>
          </div>
        </section>
      )}
      <section className="cartes">
        <>{erreur && "Un problème est survenu au chargement"}</>

        <>{livres.length === 0 && !erreur ? "Chargement des livres ..." : ""}</>

        {displayLivre().length > 0 && !chargement
          ? displayLivre().map((livre, index) => (
              <Carte
                key={livre.id}
                titre={livre.titre}
                auteur={livre.auteur}
                typeDoc={livre.typeDoc}
                prets={livre.prets}
                offset={`${index * 0.03}s`}
              ></Carte>
            ))
          : !chargement &&
            !erreur && <p> Aucun livre ne correspond à votre recherche</p>}
      </section>
      <NombredeTitres longueur={displayLivre().length}></NombredeTitres>
    </>
  );
}

export default App;
