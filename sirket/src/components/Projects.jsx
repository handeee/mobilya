import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import tamamlanan from './resimler/bilkur2.jpg';
import tamamlanan2 from './resimler/ger.jpg';
import tamamlanan3 from './resimler/hc.jpg';

const Try = () => {
  const navigate = useNavigate();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [resimler2, setResimler] = useState([tamamlanan, tamamlanan2, tamamlanan3]);

  // Define project data
  const resimler = {
    proje1: {
      id: 1,
      name: "lotus",
      description: "sitemiz a şehrinde b bölgesindedir",
      src: tamamlanan,
      detaildsc: "Park Rezidans, 1+1 ve 2+1 seçenekleriyle toplamda 15 adet bağımsız daire sunmaktadır.",
      arsaalani: "1000",
      location: "antalya",
      konut: "15",
      durum: "tamamp"
    },
    proje2: {
      id: 2,
      name: "b",
      description: "sitemiz c şehrinde d bölgesindedir",
      src: tamamlanan2,
      detaildsc: "Park Rezidans, 1+1 ve 2+1 seçenekleriyle toplamda 15 adet bağımsız daire sunmaktadır.",
      arsaalani: "2000",
      location: "istanbul",
      konut: "25",
      durum: "devamp"
    },
    proje3: {
      id: 3,
      name: "c",
      description: "sitemiz e şehrinde f bölgesindedir",
      src: tamamlanan3,
      detaildsc: "Park Rezidans, 1+1 ve 2+1 seçenekleriyle toplamda 15 adet bağımsız daire sunmaktadır.",
      arsaalani: "2000",
      location: "istanbul",
      konut: "25",
      durum: "devamp"
    },
  };

  // Convert resimler object to an array of projects
  const images = Object.values(resimler).map((proje) => ({
    src: proje.src,
    name: proje.name,
    description: proje.description,
    id: proje.id,
    detaildsc: proje.detaildsc,
    arsaalani: proje.arsaalani,
    location: proje.location,
    konut: proje.konut,
    durum: proje.durum
  }));

  // Handle click based on 'durum'
  const handleClick = (nowproject) => {
    // Filter images based on the 'durum' matching 'nowproject'
    const filteredImages = images.filter((image) => image.durum === nowproject);
    // Set 'resimler2' state to the 'src' of the filtered images
    setResimler(filteredImages.map(image => image.src));
  };

  // Navigate to project detail page
  const detayagit = (imageSrc) => {
    const selectedImage = images.find(image => image.src === imageSrc);
    navigate('/projedetay', { state: { image: selectedImage } });
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "60px",
    },
    card: {
      width: "400px",
      flex: "1 1 calc(25% - 20px)",
      boxSizing: "border-box",
      marginBottom: "20px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      maxWidth: "calc(50% - 20px)",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      marginLeft:"68px"
    },
    pet: {
      marginTop: "25px",
    },
    navbar: {
      transition: "top 0.3s",
    },
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
        <div><p onClick={() => setResimler(images.map(proje => proje.src))}>Tüm Projeler</p></div>
        <div><p onClick={() => handleClick('devamp')}>Devam Eden Projeler</p></div>
        <div><p onClick={() => handleClick('tamamp')}>Tamamlanan Projeler</p></div>
      </div>

      <div style={styles.imgContainer}>
        {resimler2.map((resim, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
            onClick={() => detayagit(resim)}
          >
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={resim}
                  alt={`resim-${index}`}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4" style={styles.pet}>{images.find(image => image.src === resim)?.name}</p>
                </div>
              </div>
              <div className="content">
                <p>{images.find(image => image.src === resim)?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Try;
