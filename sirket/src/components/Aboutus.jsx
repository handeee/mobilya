
import hakkinda from './resimler/kur2.jpg';

const Aboutus = () => {
  return (
    <div className='re' style={{
       // Use the current image's src
      backgroundSize: 'cover',
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents tiling of the image
      height:"420px",
      marginLeft:'100px',
      marginBottom:'70px'
    }}>
      <img  src={hakkinda} />
      <p>c</p>
         <p>Yenilikçi inşaatlarımız ile piyasaya giriş yapmış bulunmaktayız inşaatlarımızda güvenlik ekipmanları ve dereceye sahip kişilerle calışılmaktadır </p>
           
    </div>
  )
}

export default Aboutus
