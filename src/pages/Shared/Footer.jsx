import React from 'react';

const Footer = () => {
    return (
      <div className="w-full p-4 bg-base-200 text-gray-500 absolute bottom-0">
        <div className="flex justify-between">
          <p className="">
            Copyright © 2022-2023
            <span className="font-semibold ml-1">
             Meridian Finance & Investment Limited
            </span>
            . All rights reserved.
          </p>
          <p className="">
            <span className="font-semibold">Version</span> 2023.1.1
          </p>
        </div>
      </div>
    );
};

export default Footer;