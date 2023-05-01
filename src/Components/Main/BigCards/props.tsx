import Button from "../../Button/props";

type BigCardProps = {
  title: string;
  text: string;
  paragraph: string;
};

export default function bigCard({ title, text, paragraph }: BigCardProps) {
  return (
    <section>
      <div>
        <div>———</div>
        <span>{text}</span>
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Button text="Agendar" />
    </section>
  );
}
