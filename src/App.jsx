import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

import "./App.css";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am Shop</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="shop"
          element={<Shop />}
        />
        <Route
          path="auth"
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
