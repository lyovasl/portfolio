import ClientReview from "@/components/ClientReview";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview img="/images/user1.png" name="John" role="Web Developer" />
      <ClientReview img="/images/user2.png" name="Max" role="Desinger" />
      <ClientReview
        img="/images/user3.png"
        name="Kevin"
        role="SMM Specialist"
      />
    </Carousel>
  );
};

export default Slider;
