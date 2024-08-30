import { Route, Routes,useLocation} from 'react-router-dom';
import './App.css';

import Projects from './components/Projects';
import Aboutus from './components/Aboutus';
import HomePage from './components/HomePage';
import Corporate from './components/Corporate';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import ProjectDetail from './components/ProjectDetail';
// import Try from './components/Try';
import Homepagetry from './components/Homepagetry';
function App() {
  const location = useLocation();
  const [proje,setProje]=useState();
  const getproject=(project)=>{
  setProje(project);
  }
  return (
    <div>
    
<div className='komponentler'>
  {/* Anasayfa dışındaki kompoenentler */}
  {location.pathname !== '/' && location.pathname !== '/Projedeta' &&(
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container px-5 d-flex justify-content-between align-items-center">
          <div className='text-start'> {/* İlk sütun: Marka adı */}
            <Link className="navbar-brand mt-4" to="/">
              <b>
                <h1 className="display-6 fw-normal">ÖZ İNŞAAT</h1>
              </b>
            </Link>
          </div>

          <div className="d-flex ms-auto"> {/* Menü öğeleri */}
            <ul className="navbar-nav mb-5 mb-lg-0 d-flex align-items-center">
              <li className="nav-item me-3">
                <NavLink className="nav-link active" id="b" aria-current="page" to="/">Anasayfa</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" id="b" to="/projeler">Projeler</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" id="b" to="/kurumsal">Kurumsal</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" id="b" to="/iletisim">İletişim</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="b" to="/hakkında">Hakkında</NavLink>
              </li>
            </ul>
          </div>
      </div>

    </nav>
  )}
</div>
         {/* {location.pathname === '/'  &&(
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3 ms-3">
          <div className="container-fluid">
            <Link className="navbar-brand mt-3" to="/">
              <b>ÖZ İNŞAAT</b>
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
      )} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projeler" element={<Projects submitproject={getproject} />} />
        <Route path="/hakkımızda" element={<Aboutus />} />
        <Route path="/kurumsal" element={<Corporate />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/Projedetay" element={<ProjectDetail/>}/>
        {/* <Route path="/Protry" element={<Try/>}/> */}
        <Route path="/Projedeta" element={<Homepagetry/>}/>
      </Routes>
      <p>{proje}</p>
    </div>
  );
}

export default App;
