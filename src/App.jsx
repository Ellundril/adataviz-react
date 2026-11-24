import Entete from "./components/Entete";
import Carte from "./components/Carte";
import { donnees } from "./donnees.js";
import NombredeTitres from "./components/NombreDeTitres.jsx";

function App() {
  return (
    <>
      <Entete></Entete>
      <section className="cartes">
        {donnees.map((livre) => (
          <Carte
            key={livre.id}
            titre={livre.titre}
            auteur={livre.auteur}
            typeDoc={livre.typeDoc}
            prets={livre.prets}
          ></Carte>
        ))}
      </section>
      <NombredeTitres longueur={donnees.length}></NombredeTitres>
    </>
  );
}

export default App;
