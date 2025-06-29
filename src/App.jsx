import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Admin from "./components/pages/Admin/Admin";
import Product from "./components/pages/Product/Product";
import Man from "./components/pages/Man/Man";
import Woman from "./components/pages/Woman/Woman";
import Kids from "./components/pages/Kids/Kids";
import Basket from "./components/pages/Basket/Basket";
import Sale from "./components/pages/Sale/Sale";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: "",
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/product",
      element: <Product />,
    },
    {
      id: 4,
      path: "/man",
      element: <Man />,
    },
    {
      id: 5,
      path: "/woman",
      element: <Woman />,
    },
    {
      id: 6,
      path: "/kids",
      element: <Kids />,
    },
    {
      id: 7,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 8,
      path: "/sale",
      element: <Sale />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
