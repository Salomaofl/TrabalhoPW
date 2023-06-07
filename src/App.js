import Header from "./Componentes/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contato from "./Paginas/contato";
import sobreNos from "./Paginas/sobreNos";
import Formulario from "./Componentes/form";




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/c" element={<Contato/>}/>
                <Route path="/f" element={<sobreNos/>}/>
                <Route path="/f" element={<Formulario/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );

}

export default App;
