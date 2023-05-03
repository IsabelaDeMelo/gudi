import "./assets/Scss/Main.scss";
import Nav from "./Components/Header/Nav";
import Search from "./Components/Header/Search";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}


