import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

import "./App.css";

/* Lazy load components to have them not lazy do regular import and delete the <Suspense component>*/

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
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
            path="shop/*"
            element={<Shop />}
          />
          <Route
            path="checkout"
            element={<Checkout />}
          />
          <Route
            path="auth"
            element={<Authentication />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
