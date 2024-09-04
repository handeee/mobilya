
import kurumsal from './resimler/kurumsal.jpg';
import { NavLink, Link } from 'react-router-dom';
const Corporate = () => {
  return (
    <div  >
      {/* Navbar */}
      <nav style={{
      backgroundImage: `url(${kurumsal})`, // Use the current image's src
      backgroundSize: 'cover',
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents tiling of the image
      width: '70vw',
      height: '60vh',
      marginLeft:'90px',
      marginBottom:'70px'
    }} className="navbar navbar-expand-lg bg-body-tertiary mt-3 ms-3">
        <div className="container-fluid">
          <Link className="navbar-brand mt-3" to="/">
            <b className='bas'>ÖZ İNŞAAT</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mt-3 mb-lg-0">
              <li className="nav-item me-5">
                <NavLink className="nav-link active" id="b" aria-current="page" to="/">
                  Anasayfa
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" id="b" to="/projeler">
                  Projeler
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" id="b" to="/kurumsal">
                  Kurumsal
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" id="b" to="/iletisim">
                  İletişim
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink className="nav-link" id="b" to="/hakkımızda">
                  Hakkında
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    <div className='kurumsalaciklama'>
    <p>fhgdf</p>
    <p>fhgdf</p>
    </div>
      
        
     
    </div>
  
   
  )
}

export default Corporate
