import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/app.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
