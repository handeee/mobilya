import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import tamamlanan from './resimler/bilkur2.jpg';
import tamamlanan2 from './resimler/ger.jpg';
import tamamlanan3 from './resimler/hc.jpg';
import './Try.css'; // Import the CSS file

const Try = () => {
  const [resimler, setResimler] = useState([tamamlanan, tamamlanan2, tamamlanan3]);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleClick = (nowproject) => {
    switch (nowproject) {
      case 'tump':
        setResimler([tamamlanan, tamamlanan2, tamamlanan3]);
        break;
      case 'devamp':
        setResimler([tamamlanan3, tamamlanan, tamamlanan2]);
        break;
      case 'tamamp':
        setResimler([tamamlanan2, tamamlanan3, tamamlanan]);
        break;
      default:
        setResimler([]);
    }
  };

  const navigate = useNavigate();

  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "60px",
    },
    card: {
      width: "1300px",
      flex: "1 1 calc(25% - 20px)",
      boxSizing: "border-box",
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      maxWidth: "calc(25% - 20px)",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease",
    },
    pet: {
      marginTop: "25px",
    },
    navbar: {
      transition: "top 0.3s",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setNavbarVisible(prevScrollPos => {
        if (prevScrollPos > currentScrollPos) {
          return true;
        } else {
          return false;
        }
      });
    };

    let prevScrollPos = window.scrollY;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const detayagit = (image) => {
    navigate('/projedetay', { state: { image } });
  };

  return (
    <div className="prokapsa">
      <nav className="navbar" style={{ top: navbarVisible ? "0" : "-50px", ...styles.navbar }}>
        <div className="navbar-content">
          {/* Add your navbar content here */}
        </div>
      </nav>
      <div className="projeler">
        <p>Projeler</p>
      </div>
      <div className="altflex">
        <div><p onClick={() => handleClick('tump')}>Tüm Projeler</p></div>
        <div><p onClick={() => handleClick('devamp')}>Devam Eden Projeler</p></div>
        <div><p onClick={() => handleClick('tamamp')}>Tamamlanan Projeler</p></div>
      </div>

      <div style={styles.imgContainer}>
        {resimler.map((resim, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={resim}
                  alt={`resim-${index}`}
                  onClick={() => detayagit(resim)}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4" style={styles.pet}>abc</p>
                </div>
              </div>
              <div className="content">
                <p>{/* Placeholder for description or any content */}</p>
              </div>
              <div className="content">
                <p>{/* Placeholder for price or any content */}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Try;
