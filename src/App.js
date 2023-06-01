import Header from "./Componentes/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Paginas/contato";

function App() {
  return (
    <div>
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contato />}>
              
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );

}

export default App;
