import firstImage from "../../../assets/instagramAndImages/firstimage.jpg";
import secondImage from "../../../assets/instagramAndImages/secondimage.jpg";
import thirdImage from "../../../assets/instagramAndImages/thirdimage.jpg";
import forthImage from "../../../assets/instagramAndImages/forthimage.jpg";
import fifthImage from "../../../assets/instagramAndImages/fifthimage.jpg";
import sixthImage from "../../../assets/instagramAndImages/sixthimage.jpg";

import "./InstagramAndImages.scss";

export default function InstagramAndImages() {
  return (
    <>
      <section className="instagram-wrapper d-md-flex justify-content-center margin-t-b d-none ">
        <div className="item-1">
          <img src={firstImage} alt="mı o" />
        </div>
        <div className="item-2">
          <img src={secondImage} alt="mı o" />
        </div>
        <div className="item-3">
          <img src={thirdImage} alt="mı o" />
        </div>
        <div className="item-4">
          <img src={forthImage} alt="mı o" />
        </div>
        <div className="item-5">
          <img src={fifthImage} alt="mı o" />
        </div>
        <div className="item-6">
          <img src={sixthImage} alt="mı o" />
        </div>
      </section>
    </>
  );
}
