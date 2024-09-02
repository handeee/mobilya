import { useState, useEffect } from 'react';
import karoerkekImage from './resimler/ana.jpg'; // Import the first image
import Image from './resimler/bas2.jpg'; // Import the second image
import { NavLink, Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const projeler = {
    proje1: {
      id: 1,
      name: "lotus",
      description: "sitemiz a şehrinde b bölgesindedir",
      src: Image, // Assuming 'Image' is a string or replace with actual image reference
      detaildsc: "Park Rezidans, 1+1 ve 2+1 seçenekleriyle toplamda 15 adet bağımsız daire sunmaktadır.",
      arsaalani: "1000",
      location: "antalya",
      konut: "15",
    },
    proje2: {
      id: 2, // Changed id to 2 to differentiate from proje1
      name: "b", // Assuming name is the same as in proje1, otherwise change as needed
      description: "sitemiz c şehrinde d bölgesindedir",
      src: karoerkekImage, // Replace with actual image reference
      detaildsc: "Park Rezidans, 1+1 ve 2+1 seçenekleriyle toplamda 15 adet bağımsız daire sunmaktadır.",
      arsaalani: "2000",
      location: "istanbul",
      konut: "25",
    },
  };

  // Array of image details for the carousel
  const images = Object.values(projeler).map((proje) => ({
    src: proje.src,
    name: proje.name,
    description: proje.description, // Add description to the image details
    id:proje.id,
    detaildsc:proje.detaildsc,
    arsaalani:proje.arsaalani,
    location: proje.location,
    konut:proje.konut

  }));

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // useEffect to handle the automatic image change every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component is unmounted
  }, [images.length]);

  const detayagit = (image) => {
   
    navigate('/projedetay', { state: { image } });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentIndex].src})`, // Use the current image's src
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
      <div
        className='karousel'
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          marginTop: '-50px',
        }}
      >
        <div style={{ position: 'absolute', left: '10px' }}>
          <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>{"<"}</button> {/* Previous button */}
        </div>
        <img
          src={images[currentIndex].src} // Display the current image
          alt={`carousel image ${currentIndex + 1}`}
          style={{ height: '400px', width: '800px', objectFit: 'cover' }} // Ensuring consistent height
   
        />
        <div style={{ position: 'absolute', right: '10px' }}>
          <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>{">"}</button> {/* Next button */}
        </div>
        {/* Display the name of the current project */}
        <div className='anabas'>
          <p>{images[currentIndex].name}</p>
        </div>
        {/* Display the description of the current project */}
        <div className='proincele'>
          <p>{images[currentIndex].description}</p>
          <button onClick={() => detayagit(images[currentIndex])}>projeyi incele{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
