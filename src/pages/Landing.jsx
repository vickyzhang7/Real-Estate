/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState} from 'react';
import Slider from 'react-slick';

const Landing = () => {
  const ImageComponent = () => {
    return (
      <img
        className="max-w-full h-auto object-cover ml-auto"
        alt="landing page photo"
        src="/landing/launchPhoto.png"
      />
    );
  };
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const gatewaySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="relative bg-white w-full overflow-x-hidden flex flex-col items-center justify-start gap-[150px] text-left text-17xl text-dimgray-401 font-poppins pb-[40px]">
      <div className="self-stretch bg-gray-400 flex flex-row md:flex-col xs:px-2 sm:px-5 pl-[100px] md:pl-[40px] sm:pl-[20px] md:px-[50px] items-center justify-between text-dimgray-300 gap-[110px] relative">
        <div className="sm:absolute sm:inset-0 sm:bg-black sm:bg-opacity-50 sm:z-0 hidden sm:block"></div>
        <div className="flex flex-col items-start justify-start gap-[96px] w-full md:w-3/4 z-10 sm:bg-opacity-50">
          <div className="flex flex-col items-start justify-start gap-[40px] sm:text-neutralgray-100">
            <div className="relative font-medium inline-block w-auto lg:text-xl md:text-lg sm:my-5 sm:text-xl xs:text-sm">
              Earn Passive and Active Income through Crowdfunded Real Estate
              Investments
            </div>
            <div className="relative text-lg inline-block lg:text-lg md:text-base sm:text-xs xs:text-2xs sm:hidden">
              Experience Hassle-Free Real Estate Investing at your Fingertips.
              Manage your portfolio and join related communities.
            </div>
          </div>
          <div className="flex flex-row lg:flex-col md:flex-row items-start justify-start gap-[32px]">
            {/* the Smooth Scrolling function */}
            <button
              className="cursor-pointer bg-[transparent]"
              onClick={() => {
                const scrollTarget = document.getElementById('scrollTarget');
                if (scrollTarget) {
                  scrollTarget.scrollIntoView({ behavior: 'smooth'});
                }
              }}
            >
              <div className="font-medium text-primary sm:text-white underline">
                Learn More
              </div>
            </button>
          </div>
        </div>
        <div className="relative flex-grow flex-shrink-0 sm:absolute sm:w-full sm:h-full sm:object-cover">
          <ImageComponent />
        </div>
      </div>
      <div
        id="scrollTarget"
        className="self-stretch flex flex-col items-center justify-center py-0 text-[24.57px] text-dimgray-200 font-inter"
      >
        <div className="self-stretch flex flex-col transition-all items-start justify-start text-center text-13xl text-neutralgray-600 font-poppins">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] md:items-center">
            <div className="relative w-full shrink-0 flex flex-col items-end justify-start">
              <div className="relative flex flex-row text-13xl sm:text-7xl-8 items-center justify-start py-14 mx-auto lg:text-primarywhite">
                <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                  What Sets Us Apart
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row md:flex-col sm:flex-col items-start justify-between md:items-center text-left text-base xs:px-2 sm:px-5 md:px-6 px-[100px] text-darkslategray-100 gap-[100px]">
              <div className="self-stretch w-[573px] lg:w-full md:w-full sm:w-full flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent1(true)}
                    onMouseLeave={() => setShowContent1(false)}
                    style={{ cursor: 'pointer' }}// mouse cursor to a hand symbol
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-sm">
                        Diverse Portfolio
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent1
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-sm sm:text-xs font-poppins">
                        <p className="m-0">
                          Drive into RealEstateShowtime vast investment landscape and
                          ecosystem. From real estate properties, cash flowing
                          businesses to infrastructure and new development
                          projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent2(true)}
                    onMouseLeave={() => setShowContent2(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-sm">
                        Flexible Investment
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent2
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-sm sm:text-xs font-poppins">
                        <p className="m-0">
                          Sophtera empowers you to dictate your investment, be
                          it active or passive investing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100"
                    onMouseEnter={() => setShowContent3(true)}
                    onMouseLeave={() => setShowContent3(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-sm">
                        AI Driven Decisions
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent3
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-sm sm:text-xs font-poppins">
                        <p className="m-0">
                          Experience the cutting edge advantage of AI-driven
                          decisions with Sophtera, transforming the way you
                          approach and strategize your investments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="relative self-stretch rounded-2xs bg-primarywhite flex flex-col items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-whitesmoke-100 overflow-hidden"
                    onMouseEnter={() => setShowContent4(true)}
                    onMouseLeave={() => setShowContent4(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative font-medium md:text-base sm:text-sm">
                        Worldwide Access
                      </div>
                      <img
                        className="relative w-6 h-6"
                        alt="Arrow"
                        src="/landing/arrow-up.png"
                      />
                    </div>
                    <div
                      className={
                        showContent4
                          ? 'self-stretch flex-row items-start justify-center py-0 px-6 text-inherit font-inherit break words'
                          : 'self-stretch hidden flex-row items-start justify-center py-0 px-6 text-inherit font-inherit'
                      }
                    >
                      <div className="flex-1 relative text-sm sm:text-xs font-poppins">
                        <p className="m-0">
                          Embark on a global investment journey with Sophtera,
                          accessing untapped markets and opportunities beyond
                          borders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[456px] flex flex-row items-center justify-center py-6 px-0 box-border lg:hidden">
                <img
                  className="self-stretch flex-1 relative rounded-3xl max-w-full max-h-full mt-[-60px]"
                  alt=""
                  src="/landing/launchPhoto2.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[80px]">
            <div className="md:text-13xl max-w-[569px] flex flex-row items-center justify-center xs:px-2 sm:px-5 md:px-6 px-[100px] ">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit sm:text-5xl">
                Your Gateway to Exclusive Real Estate Opportunities
              </h1>
            </div>
            <div className="self-stretch grid grid-rows-1 grid-cols-3 lg:grid-rows-3 lg:grid-cols-2 items-start justify-between text-left text-xl text-gray-400 xs:px-2 sm:px-5 md:px-6 px-[100px] md:hidden sm:hidden mb-20">
              <div className="rounded-3xs bg-gray-200 w-[344px] lg:w-[330px] h-[344px] lg:h-[330px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Profile Icon"
                          src="/landing/landing_investorsimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 self-stretch relative text-gray-700 font-medium font-poppins">
                      Investors
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    Build your portfolio, manage your purchases, and view your
                    profit and losses across all of your investments from our
                    convenient dashboard.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] h-[344px] lg:h-[330px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt=""
                          src="/landing/landing_repimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 self-stretch relative text-gray-700 font-medium font-poppins">
                      Real Estate Professionals
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    Build relationships and network with other professionals.
                    Showcase your expertise to attract investors while promoting
                    your properties and raising capital on our platform.
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-gray-200 overflow-y-hidden w-[344px] lg:w-[330px] h-[344px] lg:h-[330px] overflow-auto shrink-0 flex flex-col items-start justify-start py-10 px-6 box-border m-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="rounded-[11.25px] flex flex-row items-start justify-start p-2">
                        <img
                          className="relative w-8 h-8"
                          alt="Bank icon"
                          src="/landing/landing_institutionsimage.png"
                        />
                      </div>
                    </div>
                    <h3 className="m-0 relative text-gray-700 font-medium font-poppins">
                      Financial Institutions
                    </h3>
                  </div>
                  <div className="self-stretch relative text-sm text-darkslategray-200">
                    You will be able to showcase your offerings, connect with
                    qualified borrowers, expand your customer base and build
                    rapport with our investors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center text-center text-13xl text-neutralgray-600 font-h1-small36">
          <div className="self-stretch flex flex-col items-center justify-center gap-[40px]">
            <div className="self-stretch flex flex-row items-center justify-center md:text-13xl sm:text-7xl-8">
              <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
                Possible Future Properties
              </h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 lg:grid-rows-2 lg:grid-cols-2 md:grid-rows-4 md:grid-cols-1 gap-[50px] sm:items-center sm:justify-start">
              <div className="self-stretch gap-[21px] items-center justify-center">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="UK Property"
                      src="/landing/UKpicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 8,754 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Office
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Camden, London</p>
                      <p className="text-sm">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="USA Property"
                      src="/landing/Calipicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> 3
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> 2
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 892 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Multifamily
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">
                        Pacific Heights, San Fransisco
                      </p>
                      <p className="text-sm">California, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="Germany Property"
                      src="/landing/Germanypicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 7,632 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Warehouse
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Bornheim, Frankfurt</p>
                      <p className="text-sm">Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-[21px] items-start justify-start">
                <div className="relative w-[264px] h-[308px] hover-content-container">
                  <div className="rounded-3xs box-border w-[268px] h-[300px] overflow-hidden flex flex-col border-2 border-solid border-neutralgray-300 bg-white">
                    <img
                      className="self-stretch relative w-full h-2/3 object-cover z-0"
                      alt="New Zealand Property"
                      src="/landing/NewZealandpicture.png"
                    />
                    <img
                      className="absolute top-[7px] left-[238px] w-6 h-6 z-[2]"
                      alt=""
                      src="/landing/heart.png"
                    />
                    <div className="overlay-content text-[14px] flex flex-wrap justify-between">
                      <div className="flex flex-wrap gap-5 w-[305px] mb-10">
                        <span className="pl-[18px]">
                          Beds: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px] pr-[10px]">
                          Baths: <br /> -
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[10px]">
                          Size: <br /> 10,892 sq. ft.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[70px] w-full">
                        <span>
                          Lot Status: <br /> Vacant
                        </span>
                        <span className="border-l border-dotted border-gray-400 pl-[15px]">
                          Type: <br /> Land
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-base mx-auto">
                      <p className="font-semibold">Mangawhai, Northland</p>
                      <p className="text-sm">New Zealand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <div className="relative text-dimgray-300 text-[24.57px] font-semibold">
          Powered by:
        </div>
        <div className="h-[30px] flex flex-row items-center justify-start box-border gap-[8px]">
          <div className="relative">
            <img
              className="absolute top-[25px] left-[-120px] w-[231px] h-[100px] object-cover"
              alt="RealEstate Logo"
              src="/RealEstateLogo.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch font-poppins">
        <footer className="self-stretch bg-gray-800 h-[80px] shrink-0 flex md:flex-row sm:flex-col items-center justify-between py-[16px] px-8 box-border text-left text-sm text-primarywhite gap-[8px]">
          <div className="relative inline-block shrink-0">
            Copyright 2024 - 601 Spring 2024
          </div>
          <div className="relative text-right">Investment Made Easy!</div>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
