import React from 'react';
import Slider from 'react-slick';

const AboutPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="p-6 lg:p-8 xl:p-10"> 
      <h1 className="text-4xl font-bold text-primaryblue-500 text-center">About Us</h1>
      <p className="text-3xl text-neutralgray-400 mt-10 text-center">
        We are a professional real estate company dedicated to helping clients find their dream homes or investment opportunities.
      </p>

      <div className="mt-20 mb-20 flex flex-row items-center md:flex-row md:justify-between">
        {/* Founder 1 */}
        <div className="flex flex-col items-center w-1/3">
          <img
            src="/founder/founder1.png" 
            alt="Founder 1"
            className="w-48 h-48 rounded-full border-2 border-primaryblue-500"
          />
          <div className="mt-4 bg-neutralgray-200 p-4 text-center w-1/2">
            <p className="text-base text-neutralgray-500">
              Meet our first founder, a visionary leader with extensive experience in real estate.
            </p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="flex flex-col items-center w-1/3">
          <img
            src="/founder/founder2.png" 
            alt="Founder 2"
            className="w-48 h-48 rounded-full border-2 border-primaryblue-500"
          />
          <div className="mt-4 bg-neutralgray-200 p-4 text-center w-1/2">
            <p className="text-base text-neutralgray-500">
              Meet our second founder, known for innovative approaches and client-focused solutions.
            </p>
          </div>
        </div>

        {/* Founder 3 */}
        <div className="flex flex-col items-center w-1/3">
          <img
            src="/founder/founder3.png" 
            alt="Founder 3"
            className="w-48 h-48 rounded-full border-2 border-primaryblue-500"
          />
          <div className="mt-4 bg-neutralgray-200 p-4 text-center w-1/2">
            <p className="text-base text-neutralgray-500">
              Meet our third founder, a strategic thinker and expert in the real estate industry.
            </p>
          </div>
        </div>
      </div>

      <Slider
          {...settings}
          className="w-full h-auto flex items-center justify-center px-[100px] mb-20"
        >
          <div className="flex flex-col bg-white items-center justify-center">
            <h2 className="text-3xl font-semibold mt-8 text-center">Our Mission</h2>
            <div className="text-black text-center xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto font-poppins">
              To democratize real estate investing, we are committed to
              providing a global platform for individuals to participate in
              diverse real estate opportunities, achieve their financial goals,
              and actively contribute to the growth and development of
              communities worldwide.
            </div>
          </div>

          <div className="flex flex-col bg-white items-center justify-center">
          <h2 className="text-3xl font-semibold mt-8 text-center">Our Vision</h2>
            <div className="text-black text-center xs:w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto font-poppins">
              We envision a world where everyone, regardless of location or
              financial status, can benefit from real estate investment
              opportunities with a click. By harnessing AI and cutting-edge
              technology, we aim to create an inclusive, transparent ecosystem
              fostering collaboration, innovation,and sustainable growth.
            </div>
          </div>
        </Slider>
    </div>
  );
};

export default AboutPage;
