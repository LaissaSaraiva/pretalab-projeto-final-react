import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage/HomePage"
import CommentsPage from "./pages/CommentsPage/CommentsPage"
import ContactPage from "./pages/ContactPage/ContactPage"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contato" element={<ContactPage/>} />
      <Route path="/comentarios" element={<CommentsPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
