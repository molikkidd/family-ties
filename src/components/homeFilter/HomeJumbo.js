import React from "react";
import { Carousel } from "react-bootstrap";
const HomeJumbo = () => {
    
        return <Carousel fade>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://www.niccolephotography.com/wp-content/uploads/2014/12/12-11393-pp_gallery/Charlotte-top-photographer-NicCole-Photography0008%28pp_w768_h511%29.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://images.squarespace-cdn.com/content/5a552c3ef09ca417f66280ae/1520025713815-SHI2N7QXB7R2QK0VJLRN/image-asset.jpeg?format=1500w&content-type=image%2Fjpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://suebryceeducation.com/wp-content/uploads/family-posing.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="homeImgs"
                        src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p>FamilyTies</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
}

export default HomeJumbo;