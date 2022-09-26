import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import img1 from './../image/s.jpg';
import img2 from './../image/basmati.jpg';
import img3 from './../image/mango1.jpg';
import img4 from './../image/basmati.jpg'
import img5 from './../image/summer.jpg';
import img6 from './../image/basmati.jpg';
import img7 from './../image/kitchen.jpg';
import img8 from './../image/summer.jpg'
export default function Corosal() {
    return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              {/* <h3>Fourth slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              {/* <h3>Fifth slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img6}
              alt="Sixth slide"
            />
            <Carousel.Caption>
              {/* <h3>Sixth slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img7}
              alt="Seventh slide"
            />
            <Carousel.Caption>
              {/* <h3>Seventh slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img8}
              alt="Eighth slide"
            />
            <Carousel.Caption>
              {/* <h3>Eighth slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
);
}
