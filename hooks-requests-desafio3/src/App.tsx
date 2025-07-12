



import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import FormPage from "./routes/Home/FormPage"

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeBody />} />
            <Route path="form-page" element={<FormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
