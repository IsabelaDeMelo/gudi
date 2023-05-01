type FooterProps = {
  title: string;
  text0: string;
  text1: string;
  text2: string;
  text3: string;
};

export default function footer({
  title,
  text0,
  text1,
  text2,
  text3,
}: FooterProps) {
  return (
    <div className="footerBox">
      <h3>{title}</h3>
      <ul>
        <a href="">
          <li>{text0}</li>
        </a>
        <a href="">
          <li>{text1}</li>
        </a>
        <a href="">
          <li>{text2}</li>
        </a>
        <a href="">
          <li>{text3}</li>
        </a>
      </ul>
    </div>
  );
}
