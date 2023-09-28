import Home from "./pages/Home";
import ListedProducts from "./pages/ListedProducts";
import DetailedProduct from "./pages/DetailedProduct";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ListedProducts />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<DetailedProduct />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
