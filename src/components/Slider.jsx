import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c1.wallpaperflare.com/preview/168/547/751/iphone-apple-mobile-phone.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="Lw">ROSE GOLD iPhone 6s on white book near gold aluminum case Apple Watch</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://valkyrie.cdn.ifixit.com/media/2021/12/09115345/td_resized.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>See-Through and X-Ray Series 7 Apple Watch</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/591/594/438/space-gray-apple-watch-with-silver-mesh-band.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Person wearing Apple Watch</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.digitaltrends.com/wp-content/uploads/2022/10/Apple-Watch-Ultra-Series-8-SE-2.jpg?p=1"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Apple Watch Series 8 vs. Apple Watch Ultra</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;