import Navbar from './component/navAndFooter/navbar'
import './App.css'
import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main className='main-page'>
        <HomePage />
      </main>
      <Footer/>
    </div>
  )
}

export default App
