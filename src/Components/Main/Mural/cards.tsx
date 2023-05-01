import localizacao from "../../../assets/Images/localizacao2x.png";
import cidades from "../../../assets/Images/cidades2x.png";
import coco from "../../../assets/Images/coco2x.png";
import restaurantes from "../../../assets/Images/restaurantes2x.png";

export default function cards() {
  return (
    <section className="cards">
      <div className="grey-bg">
        <img src={localizacao} alt="Ícone mapa" />
        <h3>O melhor do Brasil</h3>
      </div>

      <div className="blue-bg">
        <img src={cidades} alt="Ícone de estrada com montanhas" />
        <h3>Cidades mais frequentadas</h3>
      </div>

      <div className="grey-bg">
        <img className="coco" src={coco} alt="Ícone de coco" />
        <h3>Pontos turísticos</h3>
      </div>

      <div className="blue-bg">
        <img src={restaurantes} alt="Ícone de cardápio e sino" />
        <h3>Restaurantes</h3>
      </div>
    </section>
  );
}
