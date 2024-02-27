import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaSearch } from "react-icons/fa";
import Footer from '../pages/Shared/Footer';

const DashboardLayout = () => {
    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          {/* Page content here */}

          {/* navbar start */}
          <div className="navbar bg-base-200">
            <div className="flex-none">
              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <FaBars className="cursor-pointer"></FaBars>
              </label>
            </div>
            <div className="flex-1">
              <Link className="text-gray-500 hover:text-gray-900 ml-5" to="/">
                Home
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 ml-5" to="/">
                Contact
              </Link>
            </div>
            <div className="flex-none mr-5">
              <FaSearch className="cursor-pointer text-gray-500 hover:text-gray-900"></FaSearch>
            </div>
          </div>
          {/* navbar end */}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#343a40] text-gray-300 ">
            {/* Sidebar content here */}
            <li>
              <a className="hover:text-gray-50">Sidebar Item 1</a>
            </li>
            <li>
              <a className="hover:text-gray-50">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DashboardLayout;