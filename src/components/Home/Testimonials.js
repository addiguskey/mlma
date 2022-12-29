import Carousel from "react-bootstrap/Carousel";

const styles = {
  container: {
    backgroundColor: "black",
    height: "auto",
    width: "100%",
    color: "white",
  },
  content: {
    marginLeft: "20rem",
    marginRight: "20rem",
    fontSize: "1.2rem",
  },
  title: {
    color: "gray",
    fontWeight: "bold",
    textShadow: "1px 1px 1px gray",
    fontSize: "2.2rem",
  },
  name: {
    fontWeight: "bold",
    padding: "2rem",
    textShadow: "1px 1px 1px gray",
    fontSize: "1.3rem",
  },
};
export default function Testimonials() {
  return (
    <div style={styles.container} className="p-3 align-items-center">
      <div className="d-felx flex-column text-center">
        <h5 style={styles.title} className="my-5">
          TESTIMONIALS
        </h5>
      </div>

      <Carousel className="p-3 text-center">
        <Carousel.Item>
          <div className="text-center mx-5" style={styles.content}>
            <p className="mx-5">
              When my son and I came into Master Lim's Martial Arts, we were
              only looking for a fun and active option to get some exercise. We
              found so much more. We found nurturing environment that teaches
              discipline and respect. We found an extended family and life long
              friends. We found mentally engaging, challenging exercise program
              to build strength and endurance. We found a place to learn useful
              life skills, teamwork, self defense skills and perseverance. MLMA
              is now a huge part of our life, enjoyed by all four member of our
              family. My wife, son, daughter, and myself are proud to be
              students of Master Lim and part of the MLMA family.{" "}
            </p>
            <p style={styles.name}>DONNAVAN O.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="text-center mx-5 align-items-center"
            style={styles.content}
          >
            <p className="mx-5" style={{ fontsize: "0.9rem" }}>
              My experience with MLMA has been nothing but positive in many
              ways. I am more fit and alive than I was when I started and I have
              made numerous friends throughout MLMA. MLMA has helped me to be
              closer to my kids by being in class with them and experiencing
              everything together. The memories we share are priceless and I am
              sure we will talk about them to their children. I am also closer
              to my wife by growing together in sword and sharing and achieving
              our goals together. Also, I feel I have an extended family with
              MLMA. If I am down, they are there to support me and raise me up.
              When I accomplish something, they are there to celebrate with me.
              Most importantly, I have found one of my best friends in Master
              Lim. He has helped me in so many ways, there are too many to
              mention. MLMA is not just a martial arts school, it is where I get
              to spend my free time with those I love.{" "}
            </p>
            <p style={styles.name}>CASEY K.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="text-center mx-5 align-items-center"
            style={styles.content}
          >
            <p className="mx-5">
              What does the gym mean to me? <br></br>It's a second home. It's
              been a new start for me. Almost 3 years ago was when I started a
              new job and found some free time. I also found a new family here.
              A lot of wonderful people who will alternate from being wise
              teachers and leaders, to pranksters and jokers, and to people
              kicking my butt in sparring. The gym has been and will continue to
              be a second home for me. I plan on continuing with the gym and
              moving towards being an instructor. I may be a few ranks below
              other black belts, but that does not mean I won't assist in
              whatever way I can to help this gym grow and become stronger.{" "}
            </p>
            <p style={styles.name}>ANDREW F.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
