import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import "./Slider.scss";
const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slide1} className="d-block w-100" alt="..." />
          <div className="carousel-caption  slide-wrap">
            <p className="text-above">NEW BRAND</p>
            <p className="inner-title">JOZY AND MARCO</p>
            <p className="description">
              Service get met adapted matters offence for. Principles man any
              insipidity age you simplicity understood. Do offering pleasure no
              ecstatic whatever on mr directly.
            </p>
            <p className="read-more-btn">READ MORE</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption  slide-wrap">
            <p className="text-above">NEW LOOK</p>
            <p className="inner-title">PRINCESS STORY</p>
            <p className="description">
              Service get met adapted matters offence for. Principles man any
              insipidity age you simplicity understood. Do offering pleasure no
              ecstatic whatever on mr directly.
            </p>
            <p className="read-more-btn">READ MORE</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slide3} className="d-block w-100" alt="..." />
          <div className="carousel-caption  slide-wrap">
            <p className="text-above">NEW LOOK</p>
            <p className="inner-title">FOREVER BEATIFUL</p>
            <p className="description">
              Service get met adapted matters offence for. Principles man any
              insipidity age you simplicity understood. Do offering pleasure no
              ecstatic whatever on mr directly.
            </p>
            <p className="read-more-btn">READ MORE</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Slider;
