import GlobalStyle from "./GlobalStyle";
import Header from "./conponents/Header";
import { MiButton } from "./conponents/Botton";
import { Footer } from "./conponents/Footer";
import { Defaultpage } from "./conponents/Defaultpage";


function App() {
 
  return (
    <main>
      <GlobalStyle/>
      <Header>
        {window.innerWidth > 375 && <MiButton fontColor={"white"} colorBorder={"White"} >Nuevo video</MiButton>}
      </Header>
      <Defaultpage/>
      <Footer/>
    </main>
  );
}

export default App;
