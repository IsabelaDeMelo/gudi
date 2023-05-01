import bebe from "../../../assets/Images/homem-crianca2x.png";
import pedra from "../../../assets/Images/grupo-pedra2x.png";
import cachorro from "../../../assets/Images/cachorro-homem2x.png";
import homem from "../../../assets/Images/homem2x.png";
import bike from "../../../assets/Images/mulher-bike2x.png";
import grupo from "../../../assets/Images/grupo2x.png";
import Cards from "./cards";

export default function mural() {
  return (
    <section className="muralContainer">
      <div className="text">
        <p>use a hashtag #brasilisverigudi</p>
        <h2>Nosso mural de Experiências</h2>
      </div>
      <div className="imgs">
        <div>
          <img src={bebe} alt="Homem com bebê" />
          <img src={pedra} alt="Grupo de crianças em cima de uma pedra" />
          <img src={cachorro} alt="Homem com cachorro" />
        </div>
        <div>
          <img src={homem} alt="Homem selfie" />
          <img src={bike} alt="Mulher com bicicleta na estrada" />
          <img src={grupo} alt="Grupo de amigas selfie" />
        </div>
      </div>
      <div className="cardsBox">
        <Cards />
      </div>
    </section>
  );
}
