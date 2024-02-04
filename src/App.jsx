import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage/HomePage"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
