import logo from "../../assets/Images/logo2x.png";
import Footer from "../Footer/props";

export default function footerIndex() {
  return (
    <section className="footerIndex">
      <div>
        <div className="logo">
          <img src={logo} alt="Gudi Logo" />
          <h2>O bom da vida é viver</h2>
        </div>
        <Footer
          title=""
          text0="Sobre nós"
          text1="Mural de memórias"
          text2="Eventos Gudi"
          text3="Nosso blog"
        />
      </div>

      <div>
        <Footer
          title="Contato"
          text0="Chat Virtual"
          text1="SAC Online"
          text2="Ouvidoria"
          text3="FAQ"
        />
      </div>

      <div>
        <Footer
          title="Benefícios"
          text0="Conta digital Gudi"
          text1="Viaje com Milhas"
          text2="C6 Átomos"
          text3="iD Jovem"
        />
      </div>

      <div>
        <Footer
          title="Lugares"
          text0="O melhor do Brasil"
          text1="Cidades frequentes"
          text2="Pontos turísticos"
          text3="Restaurantes"
        />
      </div>

      <div>
        <Footer
          title="Curiosidades"
          text0="Cultura e tradições"
          text1="Pratos típicos"
          text2="Mitos brasileiros"
          text3="Carnaval"
        />
      </div>
    </section>
  );
}
