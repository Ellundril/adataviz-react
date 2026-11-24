import "./index.css";
import Entete from "./components/Entete";
import Carte from "./components/Carte";
import { donnees } from "./donnees.js";

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
    </>
  );
}

export default App;
