import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ShoesStore } from "./components/redux/redux.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={ShoesStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
