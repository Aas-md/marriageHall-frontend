import Navbar from './component/navAndFooter/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';

function App() {

  return (
    <>
      <Navbar />
      <main className='container'>
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />

      </main>
      <Footer/>
    </>
  )
}

export default App
