import Carousel from "react-bootstrap/Carousel";
import value1 from "../../assets/images/values/value1.png";
import value2 from "../../assets/images/values/value2.png";
import value3 from "../../assets/images/values/value3.png";
import value4 from "../../assets/images/values/value4.png";
import value5 from "../../assets/images/values/value5.png";

export default function ValuesPics() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="valueimgs d-block w-100"
          src={value1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="valueimgs d-block w-100"
          src={value2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="valueimgs d-block w-100"
          src={value3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="valueimgs d-block w-100"
          src={value4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="valueimgs d-block w-100"
          src={value5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
