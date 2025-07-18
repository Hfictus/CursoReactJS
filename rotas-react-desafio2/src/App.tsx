



import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import ProductCategory from "./routes/Home/Products/ProductCategory";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Navigate to={"/products/computers"} /> } />
            <Route path=":productId" element={<ProductCategory />} />
          </Route>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
