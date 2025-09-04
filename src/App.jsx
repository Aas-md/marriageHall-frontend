import Navbar from './component/navAndFooter/navbar'
import './App.css'
import { HomePage } from './pages/HomePage'
import Footer from './component/navAndFooter/Footer';
import ShowPage from './pages/ShowPage';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main className='main-page'>
        <ShowPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
