import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const { image } = location.state || {};
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px",
      marginTop: "20px",
    },
    img: {
      width:"500px", // Ensure the image fills the container
      height: "500px",
      objectFit: "cover", // Ensure image covers the area properly
     
    },
    
    pet: {
      marginTop: "25px",
    },
    
  };
  return (
    <div  className="detail-container">

    <div style={styles.imgContainer} >
      <img
        key={image.index}
        src={image.resim}
        alt={`image-${image.index}`}
        style={styles.img}
        className="detayresim"
      />
      <div className="detail-content">
      <div className="content">
        <p className="imgtitle" style={styles.pet}>abc</p>
        <br />
        abcc
      </div>
    
      </div>
     
     
      
    </div>
   
  </div>
  )
}

export default ProjectDetail
