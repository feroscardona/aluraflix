import GlobalStyle from "./GlobalStyle";
import Header from "./conponents/Header";
import { MiButton } from "./conponents/Botton";
import { Baner } from "./conponents/Baner";
import { Footer } from "./conponents/Footer";

function App() {
  return (
    <main>
      <GlobalStyle/>
      <Header>
        <MiButton fontColor={"white"} colorBorder={"White"}>Nuevo video</MiButton>
      </Header>
      <Baner/>
      <Footer/>
    </main>
  );
}

export default App;
