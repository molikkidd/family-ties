import React from "react";
import { Carousel, Image,} from "react-bootstrap";

const FamilyTree = () => {
    return <div className="familyTreeJumbo">
        <h2>FamilyTies</h2>
              <Carousel >
                <Carousel.Item >
                    <Image src="https://m.media-amazon.com/images/I/51KkL0rC+zS._AC_SX450_.jpg"  alt="First slide">
                    </Image>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                       
                        src="https://images4-g.ravelrycache.com/uploads/WPKnits/684983853/Family_Tree_LOGO_MKAL_medium2.png"
                        alt="Second slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    className="d-block object-fit:cover"
                    src="https://www.syniumsoftware.com/wp-content/images/mobilefamilytree/product_icon.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </div>
}

export default FamilyTree;