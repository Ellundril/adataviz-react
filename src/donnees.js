import { formaterListe } from "./utils.js";

const brutes = [
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 1179,
    titre: "Les petits rats de l'Opéra",
    auteur: "Guibert, Emmanuel",
    nombre_de_localisations: 43,
    nombre_de_pret_total: 3663,
    nombre_d_exemplaires: 77,
  },
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 555,
    titre: "Naruto. 59",
    auteur: "Kishimoto, Masashi",
    nombre_de_localisations: 44,
    nombre_de_pret_total: 2735,
    nombre_d_exemplaires: 53,
  },
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 668,
    titre: "Coke en stock",
    auteur: "Hergé",
    nombre_de_localisations: 51,
    nombre_de_pret_total: 4654,
    nombre_d_exemplaires: 75,
  },
];

const donnees = formaterListe(brutes);

export { donnees };
