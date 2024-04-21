import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Investcard from '../components/listingproperty/investcard';
import AnnouncementCard from '../components/listingproperty/announcementCard';
import { Carousel } from 'react-responsive-carousel';

const MarketplacePage = () => {
  const imageCount = 4;
  const images = []; 


  for (let i = 1; i <= imageCount; i++) {
    images.push(
      <img
        key={`image${i}`} 
        className="relative w-full"
        alt=""
        src={`/listing/image${i}.jpg`}
      />
    );
  }


  const propertyDetails = {
    id: 1,
    zpid:12345,
    bed: 3,
    bath: 2,
    livingArea: 1500,
    homeType: 'Single Family Home',
    homeStatus: 'For Sale',
    description: `Welcome to "The Beacon"! This charming vacant single-family home is a hidden gem offering 3 bedrooms, 1 bath, and approximately 1500 square feet of living space.`,
    latitude: 40.7128,
    longitude: -74.006,
  };

  const detailsData = [
    { title: 'Beds', subtitle: `${propertyDetails.bed} Beds` },
    { title: 'Baths', subtitle: `${propertyDetails.bath} Baths` },
    { title: 'Area', subtitle: `${propertyDetails.livingArea} sq. ft.` },
    { title: 'Lot Status', subtitle: `${propertyDetails.homeStatus}` },
    { title: 'Type', subtitle: `${propertyDetails.homeType}` },
    // Add more data objects here as needed
  ];

  return (
    <div className="px-40 overflow-scroll mx-auto">
      <div className="fixed bg-white z-50 w-[1400px] h-[72px] justify-between items-center inline-flex flex-row">
        <div className="text-black text-base font-medium font-['Poppins']">
          Beacon Street
        </div>
      </div>
        <div className="flex flex-row items-start mt-14 gap-20" >
            <div className="text-zinc-700 text-small font-normal font-['Poppins'] text-left mt-10" >
              <Carousel showArrows={true} emulateTouch={true} showThumbs={false}>
                {images}
              </Carousel>
              <p>{propertyDetails.description}</p>
              {/* Render property details data */}
              {detailsData.map((item, index) => (
                <p key={index}>
                  <strong>{item.title}:</strong> {item.subtitle}
                </p>
              ))}
            </div>
          <div className="flex flex-col items-start gap-10" style={{ flexBasis: '80%' }}>
            <div className="flex flex-col items-end mt-14 ">
              {/* Render Investcard component */}
              <Investcard
                raisedAmount="$94,000"
                targetAmount="$100,000"
                percentage="25"
                investors="234"
                timeLeft="1 Week left"
                minDeposit="$1,000"
                riskRating="56"
              />
            </div>

            <div className="flex items-end">
              {/* Render AnnouncementCard component */}
              <AnnouncementCard
                commenttype={'🚨 Announcements'}
                MemberName={'Steph'}
                commenttime={'06/01/2023 1:55 PM'}
                title={'🚀 Project Launch Announcement'}
                maxShortTextLength={250}
                fullText={`
                  Dear valued community members,
                  
                  We are thrilled to share the exciting news of the official launch of our latest real estate project, The Beacon Residences. This endeavor represents a significant milestone in our journey together,
                  To get an in-depth understanding of the project, we invite you to explore the attached PDF brochure. This comprehensive document provides insights into the property, available units, and the vision we have for The Beacon Residences.
                  Stay connected with us as we embark on this remarkable journey. We will be sharing exclusive insights and regular updates to ensure you are part of every exciting development.
                  Thank you for being a vital part of our community, and we look forward to this new chapter with great anticipation.
                `}
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
