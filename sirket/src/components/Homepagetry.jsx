import karoerkekImage from './resimler/ana.jpg'; // Import the image

const Homepagetry = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${karoerkekImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling of the image
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* İçerik buraya gelecek */}
      <div>
        <p>abc</p>
      </div>
    </div>
  );
};

export default Homepagetry;
