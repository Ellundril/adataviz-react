function formaterListe(liste) {
  const infosLivres = [];
  for (const livre of liste) {
    infosLivres.push({
      titre: livre.titre,
      auteur: livre.auteur,
      typeDoc: livre.type_de_document,
      prets: livre.prets,
      id: livre.titre,
    });
  }
  return infosLivres;
}

function trierPrets(liste, ordre) {
  const listeTemp = liste.toSorted(
    (livre1, livre2) => livre1.prets - livre2.prets,
  );
  switch (ordre) {
    case "croissant":
      return listeTemp;
    case "décroissant":
      return listeTemp.reverse();
    default:
      return;
  }
}

function formatNbdeResultat(liste) {
  return `Nombre de livres affichés : ${liste.length}`;
}

function recherche(input, listeLivres) {
  let livresTrouves = [];
  listeLivres.forEach((livre) => {
    const inputFormate = input.trim().toLowerCase();
    if (livre.auteur !== null) {
      const auteurFormate = livre.auteur.toLowerCase();
      if (auteurFormate.includes(inputFormate)) {
        livresTrouves.push(livre);
      }
    }
    if (livre.titre !== null) {
      const titreFormate = livre.titre.toLowerCase();
      if (titreFormate.includes(inputFormate)) {
        livresTrouves.push(livre);
      }
    }
  });
  const resultatsRecherche = new Set(livresTrouves);
  return Array.from(resultatsRecherche);
}

function creerFiltre(listeLivres) {
  let tabOptions = ["tous"];
  listeLivres.forEach((livre) => tabOptions.push(livre.typeDoc));

  const setOption = new Set(tabOptions);
  return Array.from(setOption);
}
export {
  formaterListe,
  trierPrets,
  formatNbdeResultat,
  recherche,
  creerFiltre,
};
