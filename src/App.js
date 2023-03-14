import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Favorite from "./page/Favorite";
import Basket from "./page/Basket";
import DetailProduct from "./page/DetailProduct";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={ <Home/> }/>
            <Route path={'favorite'} element={ <Favorite/> }/>
            <Route path={'/basket'} element={ <Basket/> }/>
            <Route path={'/product/detail/:productId'} element={ <DetailProduct/> }/>
        </Routes>
    </div>
  );
}

export default App;
