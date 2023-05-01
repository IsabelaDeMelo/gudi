type ButtonProps = {
  text: string;
};

export default function button({ text }: ButtonProps) {
  return (
    <div className="btn">
      <button>{text}</button>
    </div>
  );
}
