import Button from "../../Button/props";

export default function search() {
  return (
    <div className="searchContainer">
      <section>
        <h1>Para qual estado você deseja ir?</h1>
        <input placeholder="Pesquisar" />
        <Button text="buscar" />
      </section>
    </div>
  );
}
