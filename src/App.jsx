import Navbar from './component/navAndFooter/navbar'
import './App.css'
import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';

function App() {

  return (
    <>
      <Navbar />
      <main className='container'>
        <HomePage />
       

      </main>
      <Footer/>
    </>
  )
}

export default App
