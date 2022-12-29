import Carousel from "react-bootstrap/Carousel";
import group10 from "../../assets/images/group/group10.png";
import group11 from "../../assets/images/group/group11.png";
import group12 from "../../assets/images/group/group12.png";
import group13 from "../../assets/images/group/group13.png";
import group14 from "../../assets/images/group/group14.png";
import group15 from "../../assets/images/group/group15.png";
import group16 from "../../assets/images/group/group16.png";
import group17 from "../../assets/images/group/group17.png";
import group18 from "../../assets/images/group/group18.png";

const styles = {
  pic: {
    width: "40rem",
    height: "auto",
  },
};
export default function ContactPics2() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={group10} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group11} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group12} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group13} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group14} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group15} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group16} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group17} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={group18} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
