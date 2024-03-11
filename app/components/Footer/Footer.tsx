import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color-secondary py-8">
      <div className="px-4 pt-4">
        <p className="text-color-primary text-xl">References: </p>
        <Link
          className="text-color-primary text-lg pt-4 hover:underline"
          href="https://www.vann.my.id/"
        >
          vann.my.id
        </Link>
        <div>
          <p className="text-color-primary text-lg pt-10">
            Image by
            <Link
              className="text-color-primary text-lg pt-4 hover:underline"
              href="https://www.freepik.com/free-vector/modern-city-cartoon-vector-night-landscape_4394140.htm#query=city%20purple&position=5&from_view=keyword&track=ais&uuid=11482ee7-5848-4048-9f9f-26dedfba6d3b"
            >
              &nbsp;vectorpouch
            </Link>
            &nbsp;on freeepik
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-color-primary text-lg">😊 Thank you for visiting!</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-color-primary text-lg">
          ❤️ Made with love by KangBaso
        </p>
      </div>
      <div className="justify-center items-center mt-4">
        <p className="text-color-primary text-lg text-center">
          Website Licensed Under GNU GPLv3.
          <br /> Modification is possible while copyright and license notices
          must be preserved.
        </p>
      </div>
      <div className="justify-center items-center mt-4">
        <p className="text-color-primary text-lg text-center">
          Copyright © 2024 KangBaso
        </p>
      </div>
    </footer>
  );
};

export default Footer;
