import Button from "../../Button/props";

export default function contato() {
  return (
    <section className="contatoBox">
      <h2>Fale conosco</h2>
      <input type="email" placeholder="Diga o seu melhor email" />
      <input type="text" placeholder="Assunto" />
      <input type="text" placeholder="Escreva a sua mensagem" />
      <Button text="Enviar" />
    </section>
  );
}
