import Header from "./Componentes/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contato from "./Paginas/contato";
import Formulario from "./Componentes/form";
import SobreNos from "./Paginas/sobreNos";





function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route index element={<Header />} />
                <Route path="/h" element={<Header/>}/>
                <Route path="/c" element={<Contato/>}/>
                <Route path="/f" element={<Formulario/>}/>
                <Route path="/S" element={<SobreNos/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );

}

export default App;
