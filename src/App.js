import GlobalStyle from "./GlobalStyle";
import Header from "./conponents/Header";
import { Footer } from "./conponents/Footer";
import { Defaultpage } from "./conponents/Defaultpage";
import { BrowserRouter as Router} from "react-router-dom"

function App() {
 
  return (
    <main>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Defaultpage/>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
