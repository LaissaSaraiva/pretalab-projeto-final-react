import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage/HomePage"
import ContactPage from "./pages/ContactPage/ContactPage"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contato" element={<ContactPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
