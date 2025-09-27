import Navbar from './component/navAndFooter/navbar'
import './App.css'
import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';
import ShowPage from './pages/ShowPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage';
import { Toaster } from "react-hot-toast";
import AddListingPage from './pages/AddListingPage';


function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <Toaster /> */}
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className='main-page'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/showpage/:listingId" element={<ShowPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/AddListing" element={<AddListingPage />} />

          </Routes>

        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
