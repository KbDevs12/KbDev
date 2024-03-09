import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color-dark py-8">
      <div className="px-4 pt-4">
        <p className="text-color-primary text-xl">References: </p>
        <Link
          className="text-color-primary text-lg pt-4 hover:underline"
          href="https://www.vann.my.id/"
        >
          vann.my.id
        </Link>
        <div>
          <p className="text-color-primary text-lg pt-5">
            Photo by
            <Link
              className="text-color-primary text-lg pt-4 hover:underline"
              href="https://unsplash.com/@neom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              &nbsp;NEOM
            </Link>
            &nbsp;on
            <Link
              className="text-color-primary text-lg pt-4 hover:underline"
              href="https://unsplash.com/photos/a-person-standing-on-top-of-a-cliff-207NEuFvjlg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              &nbsp;Unsplash
            </Link>
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
