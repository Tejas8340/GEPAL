import React, { useState } from "react";
import logo from "../assets/Home Page logo/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="mt-2 mb-8 w-full h-15 border border-sky-500 flex">
      <div className="w-full mx-auto">
        <Link to="/" onClick={() => navigateToPage("/")}>
          <img src={logo} alt="" className="w-40 h-[60px] ml-[40%] mt-1 flex" />
        </Link>
      </div>
      <div className="mr-[25%] w-[100%]">
        <div>
          <h1 className="mt-2 text-sm-2">
            <b>
              India's <span style={{ color: "red" }}> No.1 </span> Entrance
              Automation & Loading Bay Equipment Company
            </b>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5 justify-between items-center text-xs mt-3">
            <li
              onMouseEnter={() => setIsOverviewOpen(true)}
              onMouseLeave={() => setIsOverviewOpen(false)}
              className="relative group"
            >
              <Link to="/overview" onClick={() => navigateToPage("/overview")}>
                OVERVIEW
              </Link>
              {isOverviewOpen && (
                <ul className="absolute bg-white border border-gray-300 p-2 mt-1 ml-3 w-[150px]">
                  <li>
                    <Link to="/about" onClick={() => navigateToPage("/about")}>
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link to="/quality" onClick={() => navigateToPage("/quality")}>
                      QUALITY POLICY
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/milestones"
                      onClick={() => navigateToPage("/milestones")}
                    >
                      MILESTONES
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
              className="relative group"
            >
              <Link to="/products" onClick={() => navigateToPage("/products")}>
                PRODUCTS
              </Link>
              {isProductsOpen && (
                <ul className="absolute bg-white border border-gray-300 p-2 mt-1 ml-3 w-[150px]">
                  <li>
                    <Link to="/doors" onClick={() => navigateToPage("/doors")}>
                      DOORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/highspeed"
                      onClick={() => navigateToPage("/highspeed")}
                    >
                      HIGH SPEED DOORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/loadingby"
                      onClick={() => navigateToPage("/loadingby")}
                    >
                      LOADING BAY EQUIPMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rollingshutters"
                      onClick={() => navigateToPage("/rollingshutters")}
                    >
                      ROLLING SHUTTERS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hangar_doors"
                      onClick={() => navigateToPage("/hangar_doors")}
                    >
                      HANGER DOORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/commercialdoors"
                      onClick={() => navigateToPage("/commercialdoors")}
                    >
                      COMMERCIAL DOORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/firerated"
                      onClick={() => navigateToPage("/firerated")}
                    >
                      FIRE RATED SHUTTERS DOORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gates"
                      onClick={() => navigateToPage("/gates")}
                    >
                      GATES
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/boombarriers"
                      onClick={() => navigateToPage("/boombarriers")}
                    >
                      BOOM BARRIERS
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/support" onClick={() => navigateToPage("/support")}>
                SUPPORTS
              </Link>
            </li>
            <li>
              <Link to="/downloads" onClick={() => navigateToPage("/downloads")}>
                DOWNLOADS
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={() => navigateToPage("/career")}>
                CAREER
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => navigateToPage("/contact")}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
