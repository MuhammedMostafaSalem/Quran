import Footer from "./components/utils/Footer"
import Header from "./components/utils/Header"
import Live from "./pages/Live";
import Surah from "./pages/Surah"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tafsir from "./pages/Tafsir";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Surah />} />
        <Route path="/live" element={<Live />} />
        <Route path="/tafsir" element={<Tafsir />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
