import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import PlantDetail from "./pages/PlantDetail";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const categories = [
    "Plantas medianas/grandes",
    "Plantas pequeñas",
    "Plantas con flores"
  ];

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated} />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList categories={categories} />} />
          <Route path="/producto/:id" element={<PlantDetail />} />

          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App


