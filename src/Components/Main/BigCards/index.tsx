import BigCard from "./props";
import casal from "../../../assets/Images/casal2x.png";
import grupoHike from "../../../assets/Images/grupo-hike2x.png";
import grupoMar from "../../../assets/Images/grupo-mar2x.png";

export default function bigCardIndex() {
  return (
    <section className="container">
      <img className="bigCardImg" src={casal} alt="Casal com balões ao fundo" />
      <div className="cardBlue0">
        <div className="whiteLine"></div>
        <BigCard
          text="Viagens nacionais"
          title="O clima perfeito, no lugar perfeito"
          paragraph="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não
                    tem preço."
        />
      </div>

      <div className="cardWhite">
        <BigCard
          text="Viagens nacionais"
          title="Curta uma nova vibe entre amigos"
          paragraph="Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi."
        />
      </div>
      <img
        className="bigCardImg"
        src={grupoHike}
        alt="Grupo de pessoas em uma montanha"
      />

      <img
        className="bigCardImg"
        src={grupoMar}
        alt="Grupo de pessoas no mar"
      />
      <div className="cardBlue1">
        <BigCard
          text="Viagens nacionais"
          title="Algumas experiências são inexplicáveis"
          paragraph="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."
        />
      </div>
    </section>
  );
}
