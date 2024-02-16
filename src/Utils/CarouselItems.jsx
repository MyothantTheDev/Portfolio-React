
// icon and text accept as array

const CarouselItems = ({ icon, text }) => {

  return (
    <div className="item">
      <img src={icon} alt={text} />
      <h5>{text}</h5>
    </div>
  );
  
}

export default CarouselItems;