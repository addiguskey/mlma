import Carousel from "react-bootstrap/Carousel";
import ksma1 from "../../assets/images/ksma/ksma1.jpeg";
import ksma2 from "../../assets/images/ksma/ksma2.png";
import ksma3 from "../../assets/images/ksma/ksma3.png";
import ksma4 from "../../assets/images/ksma/ksma4.png";
import ksma5 from "../../assets/images/ksma/ksma5.png";
import ksma6 from "../../assets/images/ksma/ksma6.png";

export default function SwordPics() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ksma6} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
