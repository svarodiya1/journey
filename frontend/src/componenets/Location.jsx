import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import Card from './Card';

const Location = () => {
  const [loca, setLoca] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLoca = async () => {
      try {
        const res = await axios.get("http://localhost:4001/loca");
        const data = res.data.filter((data) => data.price === 999); // Adjusted to compare as a number
        console.log(data);
        setLoca(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Ensure loading state is updated after the fetch
      }
    };
    getLoca();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-2xl pb-2">Most Viewed Package</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et mollitia
            veritatis ab laborum pariatur consequatur iste molestias fuga dolore
            sapiente.
          </p>
        </div>
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <p>Loading...</p> {/* You can replace this with a spinner */}
            </div>
          ) : (
            <Slider {...settings}>
              {loca.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Location;
