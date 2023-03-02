import axios from "axios";
import { Card } from "flowbite-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";

const Hero5 = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:3006/homepage/bosuutap").then((response) => {
        setCollections(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <Card className="bg-white mt-6">
      <h5 className="text-base ml-1 md:text-xl font-bold text-gray-900 dark:text-white">
        Bộ sưu tập nổi bật
      </h5>

      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={"desktop"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-margin-40-px"
      >
        {collections.map((collection: any) => {
          return (
            <a href={collection.path} key={collection.id}>
              <div className="border mb-1 shadow-sm hover:shadow-lg border-gray-200 rounded-md mx-1">
                <img
                  src={collection.image}
                  alt="..."
                  className="rounded-md mx-auto "
                />
              </div>
            </a>
          );
        })}
      </Carousel>
    </Card>
  );
};

export default Hero5;
