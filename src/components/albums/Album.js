import React, {useState} from 'react';
import {Carousel,Image} from 'react-bootstrap';

const Album = (props) => {
const [album, setAlbums] = useState([props.images]);

console.log('albums container', props.images)
    const allImages = props.images.map((image, idx) => {
            return <Carousel.Item key={idx}>
                        <Image
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3> Should have worked</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
    })
    return <div>
                <Carousel fade>
                    {allImages}
                </Carousel>
             </div>
};

export default Album;