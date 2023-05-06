import GlobalStyle from "./GlobalStyle";
import Header from "./conponents/Header";
import { Footer } from "./conponents/Footer";
import { Defaultpage } from "./conponents/Defaultpage";


function App() {
 
  return (
    <main>
      <GlobalStyle/>
      <Header/>
      <Defaultpage/>
      <Footer/>
    </main>
  );
}

export default App;
