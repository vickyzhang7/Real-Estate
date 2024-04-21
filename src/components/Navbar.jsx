import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import OurStoryDropdown from './ui/OurStoryDropdown';

const Tooltip = ({ text }) => {
  return (
    <div className="relative group inline-block">
      <div className="lg:hidden invisible group-hover:visible bg-primaryblue-500 text-white text-[8px] rounded p-1 absolute top-[17px] left-1/2 w-[56px] whitespace-nowrap transform -translate-x-1/2">
        Coming Soon
      </div>
      <span className="lg:hidden group-hover:underline cursor-pointer">
        {text}
      </span>
    </div>
  );
};
const Navbar = () => {
  const { user, isLoading } = useAuth0();

  const linkClassNames =
    '[text-decoration:none] flex flex-col p-8 items-start justify-start text-[inherit] hover:bg-gray-50 hover:text-primaryblue-500';
  return (
    <div>
      <div className="self-stretch z-500 bg-white flex flex-row py-4 xs:px-2 sm:px-5 md:px-6 px-[100px] items-center justify-between text-left text-sm text-neutralgray-600 font-body-small14 border-b-[1px] border-solid border-gainsboro-100">
        {/* LOGO - start */}
        {/* Make sure that the above padding is set to the all the other components on this page. */}
        <Link to="/">
         <img src="/RealEstateLogo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </Link>
        <div className="flex flex-row items-start justify-between gap-[24px] text-sm">
          {user ? (
            <>
            <div className="flex flex-row items-center justify-between gap-[50px]">
              <Link to="/portfolio" className={linkClassNames}>
                <div className="relative font-medium">Portfolio</div>
              </Link>
              <Link to="/marketplace" className={linkClassNames}>
                <div className="relative font-medium">Marketplace</div>
              </Link>
              <Link to="/community" className={linkClassNames}>
                <div className="relative font-medium">Community</div>
              </Link>
              <OurStoryDropdown />
              <div className="relative font-medium"><LogoutButton /></div>
            </div>
            </>
          ) : (
            <>
              <div className="flex flex-row items-start justify-start gap-[50px]">
                <div className="relative font-medium items-center">
                  <Tooltip text="Marketplace"></Tooltip>
                </div>
                <div className="relative font-medium items-center">
                  <Tooltip text="About"></Tooltip>
                </div>
                <div className="relative font-medium items-center">
                  <Tooltip text="Community"></Tooltip>
                </div>
                <div className="relative font-medium items-center">
                  <Tooltip text="Support"></Tooltip>
                </div>
                <div className="relative font-medium items-center">
                  <LoginButton />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-end gap-[24px]">
          <div className="flex flex-row items-center justify-end gap-[24px]">
              {!isLoading && user && (
                <span>{user.name}</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
