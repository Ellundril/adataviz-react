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
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 640,
    titre: "Une vie rose bonbon",
    auteur: "Pujol, Romain",
    nombre_de_localisations: 37,
    nombre_de_pret_total: 1356,
    nombre_d_exemplaires: 40,
  },
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 992,
    titre: "Mon coup d'soleil, c'est toi !",
    auteur: "Cazenove, Christophe",
    nombre_de_localisations: 46,
    nombre_de_pret_total: 4370,
    nombre_d_exemplaires: 70,
  },
  {
    type_de_document: "Livre adulte",
    prets: 930,
    titre: "Premier sang : roman",
    auteur: "Nothomb, Amélie",
    nombre_de_localisations: 49,
    nombre_de_pret_total: 1483,
    nombre_d_exemplaires: 62,
  },
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 660,
    titre: "Machine à blagues",
    auteur: "Pujol, Romain",
    nombre_de_localisations: 41,
    nombre_de_pret_total: 1420,
    nombre_d_exemplaires: 44,
  },
  {
    type_de_document: "Bande dessinée jeunesse",
    prets: 647,
    titre: "La menace Schtroumpf",
    auteur: "Parthoens, Luc",
    nombre_de_localisations: 33,
    nombre_de_pret_total: 3834,
    nombre_d_exemplaires: 45,
  },
  {
    type_de_document: "Livre adulte",
    prets: 590,
    titre: "Enfant de salaud",
    auteur: "Chalandon, Sorj",
    nombre_de_localisations: 49,
    nombre_de_pret_total: 921,
    nombre_d_exemplaires: 53,
  },
];

const donnees = formaterListe(brutes);

export { donnees };
