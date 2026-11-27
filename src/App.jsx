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
  const [messageErreur, setMessageErreur] = useState("");
  const [chargement, setChargement] = useState(true);
  const [filtreActif, setFiltreActif] = useState(false);
  const [cacheFiltre, setCacheFiltre] = useState(true);
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
      !filtreActif && setFiltreActif(true);
      typeLivre = livres.filter((livre) => livre.typeDoc === optionChoisie);
    }
    if (auteurChoisi !== "tous") {
      !filtreActif && setFiltreActif(true);
      auteurLivre = livres.filter((livre) => livre.auteur === auteurChoisi);
    }
    if (recherche.length !== 0) {
      !filtreActif && setFiltreActif(true);
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
    setFiltreActif(false);
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
        setErreur(true);
        setMessageErreur(erreur.message);
      } finally {
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
          <Button
            action={() => setCacheFiltre(!cacheFiltre)}
            contenu="Afficher les filtres"
            classe="btn-affichage-filtres"
          ></Button>
          <div
            className={cacheFiltre ? "filtre-select cache" : "filtre-select"}
          >
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
                classe="tri-nb-de-prets-decroissant"
                action={() => {
                  setLivres(trierPrets(livres, "décroissant"));
                }}
                aria-label="trier les livres par ordre décroissant de prêts"
                contenu={"⬇️"}
              ></Button>
              <Button
                classe="tri-nb-de-prets-croissant"
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
      <p role="alert">
        {erreur &&
          "Un problème est survenu pendant le chargement des livres : " +
            messageErreur}
      </p>

      <p role="status">
        {livres.length === 0 && !erreur && chargement
          ? "Chargement des livres ..."
          : ""}
      </p>
      <section className="cartes">
        <>
          {livres.length === 0 && !erreur && !chargement
            ? "Aucun livre chargé"
            : ""}
        </>

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
            !erreur &&
            filtreActif && <p> Aucun livre ne correspond à votre recherche</p>}
      </section>
      <NombredeTitres longueur={displayLivre().length}></NombredeTitres>
    </>
  );
}

export default App;
