import Carousel from "react-bootstrap/Carousel";
import tkd1 from "../../assets/images/tkd/tkd1.jpeg";
import tkd2 from "../../assets/images/tkd/tkd2.jpeg";
import tkd3 from "../../assets/images/tkd/tkd3.png";
import tkd4 from "../../assets/images/tkd/tkd4.png";
import tkd5 from "../../assets/images/tkd/tkd5.png";
import tkd6 from "../../assets/images/tkd/tkd6.png";

export default function TkdPics() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tkd6} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
