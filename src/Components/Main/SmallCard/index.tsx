import Button from "../../Button/props";

export default function SmallCard() {
  return (
    <section className="smallContainer">
      <div className="rj">
        <Button text="Rio de Janeiro" />
      </div>
      <div className="rio">
        <Button text="Rio das Ostras" />
      </div>
      <div className="caldas">
        <Button text="Caldas Novas" />
      </div>
      <div className="amazonia">
        <Button text="Amazônia" />
      </div>
    </section>
  );
}
