import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const { image } = location.state || {};
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "60px",
      marginTop: "20px",

    },
    img: {
      width:"500px", // Ensure the image fills the container
      height: "450px",
      objectFit: "cover", // Ensure image covers the area properly
      marginLeft:"50px",
      marginTop:"130px",
     
    },
    pet: {
      marginTop: "105px",
      
    },
    
  };
  return (
    <div  className="detail-container">

    <div style={styles.imgContainer} >
      <img
        key={image.index}
        src={image.src}
        alt={`image-${image.index}`}
        style={styles.img}
        className="detayresim"
      />
   
      <div className="detail-content">
      <div className="content">
        <p className="imgtitle" style={styles.pet}>{image.detaildsc}</p>
        <br />
        <div className="yanbilgi">
          <div >{image.arsaalani}</div>
        
          <div >{image.location}</div>
          <div> {image.name}</div>
        
       
        </div>
    
       
      </div>
    
      </div>
     
     
      
    </div>
   
  </div>
  )
}

export default ProjectDetail
