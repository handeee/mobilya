import  { useState, useEffect } from 'react';
import karoerkekImage from './resimler/ana.jpg'; // Import the first image
import Image from './resimler/bas2.jpg'; // Import the second image
import { NavLink, Link,useNavigate } from 'react-router-dom';

const HomePage = () => {
  // Array of images for the carousel
  const images = [karoerkekImage, Image];
  
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to handle the automatic image change every 2 seconds
  useEffect(() => {
    // Function to change the image index
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);
  const detayagit = (image) => {
    navigate('/projedetay', { state: { image } });
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${images[currentIndex]})`, // Use the current image
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling of the image
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3 ms-3">
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

      {/* Carousel */}
      <div className='karousel' style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' ,marginTop: '-50px' }}>
        <div style={{ position: 'absolute', left: '10px' }}>
          <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>{"<"}</button> {/* Previous button */}
        </div>
        <img
          src={images[currentIndex]} // Display the current image
          alt={`carousel image ${currentIndex + 1}`}
          style={{ height: '400px',width:'800px',bjectFit: 'cover' }} // Ensuring consistent height
        />
        
        <div style={{ position: 'absolute', right: '10px' }}>
          <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>{">"}</button> {/* Next button */}
        </div>
        <div className='anabas'><p>LOTUS VİLLA</p></div>
        <div className='proincele'>
          <p>projemiz şu alanda yer almaktadır</p>
            <button onClick={()=>detayagit(images[currentIndex])}>projeyi incele{">>"}</button>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
