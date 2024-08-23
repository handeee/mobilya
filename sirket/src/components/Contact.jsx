

const Contact = () => {
  return (
    <div className="iletisimflex">
      <div className="ilebas">
       <div className="koyubaslik">Bize Ulaşın</div>
       <div>Siz değerli müşterilerimizle . Her türlü geri dönüşünüz bizim için değerlidir.</div>
       <div>telefon</div>
       <div>adres</div>
       <div>mail</div>
      </div>
      <div>
        <div className="map-section">
          <div className="gmap-frame">
          <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
