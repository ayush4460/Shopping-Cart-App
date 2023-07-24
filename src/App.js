import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/app.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
