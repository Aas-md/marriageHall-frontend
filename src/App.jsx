import Navbar from './component/navAndFooter/navbar'
import './App.css'
import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';
import ShowPage from './pages/ShowPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage'

function App() {

  return (
     <BrowserRouter>
    <div className='app'>
      <Navbar />
      <main className='main-page'>
         <Routes>
            <Route path="/" element={<ShowPage />} />
              <Route path="/signup" element={<SignupPage />} />
         </Routes>
      
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
