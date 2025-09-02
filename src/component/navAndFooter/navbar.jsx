import './navbar.css'
import { FaTentArrowsDown } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md ">
  
      <div className="logo d-flex align-items-center">
        <FaTentArrowsDown className="icon me-2" />
        <span>Explore</span>
      </div>

      {/* Hamburger toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="menu">
  {/* Search bar */}
  <div className="nav-input mx-auto flex-column flex-md-row d-flex mb-2 mb-md-0">
    <form className="d-flex w-100 ">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn d-flex align-items-center gap-2"
        type="submit"
      >
        <IoSearch /> Search
      </button>
    </form>
  </div>

  {/* Buttons */}
  <div className="buttons ms-auto d-flex flex-column flex-md-row">
    <span >Add new listing</span>
    <span >Signup</span>
    <span>Login</span>
    <span className='logout'>Logout</span>
  </div>
</div>

    </nav>
  );
}

