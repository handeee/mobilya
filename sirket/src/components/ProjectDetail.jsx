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
      marginTop: "135px",
      
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
      
        <div><p>{image.description}</p></div>
        <br/>
        <div className="yanbilgi">
          <div className="baslikalan" >
            <div>
            <div className="detaybas">KONUM</div>
            <p></p>
            <div>{image.location}</div>
            </div>
            <div>
            <div className="detaybas">ARSA ALANI</div>
            <p></p>
            <div>{image.arsaalani}m2</div>
            </div>
            <div>
            <div className="detaybas">İNŞAAT ALANI</div>
            <p></p>
            <div>{image.arsaalani}m2</div>
            </div>
            <div>
            <div className="detaybas">BLOK SAYISI</div>
            <p></p>
            <div>{image.arsaalani}m2</div>
            </div>
            
            </div>
           
        </div>
        <div className="c">
        <div>
            <div className="detaybas">KONUT M2</div>
            <p></p>
            <div>{image.location}</div>
            </div>
            <div>
            <div className="detaybas">KONUT SAYISI</div>
            <p></p>
            <div>{image.konut}m2</div>
            </div>
            {/* <div>
            <div className="detaybas">Arsa alanı</div>
            <p></p>
            <div>{image.arsaalani}m2</div>
            </div>
            <div>
            <div className="detaybas">Arsa alanı</div>
            <p></p>
            <div>{image.arsaalani}m2</div>
            </div>
             */}
        </div>
     
      </div>
    
      </div>
     
     
      
    </div>
   
  </div>
  )
}

export default ProjectDetail
