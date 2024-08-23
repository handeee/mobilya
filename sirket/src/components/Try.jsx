import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import tamamlanan from './resimler/bilkur2.jpg';
import tamamlanan2 from './resimler/ger.jpg';
import tamamlanan3 from './resimler/hc.jpg';

const Try = () => {
  const [resimler, setResimler] = useState([tamamlanan, tamamlanan2, tamamlanan3]);

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
      gap: "20px", // Aradaki boşluğu artırın
      marginTop: "60px",
    },
    img: {
      width: "100%", // Görüntü genişliği
      height: "300px", // Sabit bir yükseklik verin
    },
    card: {
      width: "1300px",
      flex: "1 1 calc(25% - 20px)", // Kartın genişliği: %25 ve aradaki boşluk
      boxSizing: "border-box", // İç kenar boşluklarını ve sınırları kapsar
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px", // Kart köşelerini yuvarlayın
      maxWidth: "calc(25% - 20px)", // Maksimum genişlik
      backgroundColor: "#fff", // Arka plan rengi
      transition: "transform 0.3s ease", // Hover efekti için geçiş
    },
    cardHover: {
      transform: "scale(1.05)", // Hover efekti
    },
    pet: {
      marginTop: "25px",
    },
  };

  const detayagit = (image) => {
    navigate('/projedetay', { state: { image } });
  };

  return (
    <div className="prokapsa">
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
            key={index} // Adding the unique key prop
            className="card"
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={resim}
                  alt={`resim-${index}`} // Correct usage of template literal
                  style={styles.img}
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
