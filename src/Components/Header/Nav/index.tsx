import Button from "../../Button/props";
import logo from "../../../assets/Images/logo2x.png";

export default function nav() {
  return (
    <div className="navbar">
      <section className="logoContainer">
        <div>
          <img src={logo} alt="Gudi logo" />
        </div>
        <h2>O bom da vida é viver</h2>
      </section>

      <section className="navContainer">
        <nav>
          <ul>
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contato</li>
          </ul>
          <Button text="Agendar" />
        </nav>
      </section>
    </div>
  );
}
