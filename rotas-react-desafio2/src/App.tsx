



import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Host from "./routes/Host"
import Home from "./routes/Host/Home"
import Products from "./routes/Host/Products"
import About from "./routes/Host/About";
import NotFound from "./routes/Host/NotFound";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Host />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
