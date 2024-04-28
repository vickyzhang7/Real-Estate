/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';



const Investcard = ({
  raisedAmount,
  targetAmount,
  percentage,
  investors,
  timeLeft,
  minDeposit,
  riskRating,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }
  }, [percentage]);
  
  return (
    <div className="border border-solid border-neutralgray-200 font-poppins w-full px-0 sm:px-5xl">
      <div className="py-5 px-6">
        {/* Raised Amount and Target */}
        <div className="text-left w-full mb-5">
          <span className="font-bold font-poppins text-5xl text-primary-blue-500 w-1/3">
            {raisedAmount}
          </span>
          <span className="text-base font-normal text-black w-2/3">
            &nbsp; raised of {targetAmount}
          </span>
        </div>

        {/* Progress Bar and Percentage */}
        <div className="flex items-center w-full mb-6">
          <div className="text-neutralgray-700 text-base text-right">
            {percentage}%
          </div>
          <div className="bg-secondaryblue-50 h-3 rounded-full w-full mx-2">
            <div
              className="bg-primary-blue-500 h-3 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Investors, Time Left, Min. Deposit in a Column */}
        <div className="flex flex-col w-full ml-auto justify-center">
          <div className="flex items-start self-stretch gap-5">
            {/* Left Section  */}
            <div className="flex flex-col bg-white self-stretch gap-5 items-center h-full">
              <div className="flex bg-white self-stretch items-center gap-2">
                <img
                  loading="lazy"
                  src="/listing/investors.png"
                  className="aspect-w-1 object-contain object-center w-5"
                />
                <div className="text-neutralgray-600 font-normal text-base self-stretch">
                  <span>{investors}</span> Investors
                </div>
              </div>

              {/* Time Left Section */}
              <div className="flex bg-white self-stretch items-center gap-2">
                <img
                  loading="lazy"
                  src="/listing/time.png"
                  className="aspect-w-1 object-contain object-center w-5"
                />
                <div className="text-neutralgray-600 font-normal text-base self-stretch">
                  <span>{timeLeft}</span>
                </div>
              </div>

              {/* Min. Deposit Section */}
              <div className="flex bg-white self-stretch items-center gap-2">
                <img
                  loading="lazy"
                  src="/listing/money.png"
                  className="object-contain object-center w-5"
                />
                <div className="text-neutralgray-600 font-normal text-base self-stretch">
                  Min. Deposit: <span>{minDeposit}</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center ml-2 mt-5 h-full self-stretch">
              <div className="text-neutralgray-600 stretch whitespace-nowrap text-sm font-normal font-poppins">
                Risk Rating
              </div>
              <div className="text-neutralgray-600 self-center whitespace-nowrap text-13xl font-bold font-poppins">
                <span>{riskRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invest Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="justify-center bg-primaryblue-500 flex mx-auto p-2 w-full rounded-md mt-10"
        >
          <div className="text-white text-sm bg-transparent w-full font-medium p-2">
            Go to portfolio
          </div>
        </button>
      </div>
    </div>
  );
};

export default Investcard;
