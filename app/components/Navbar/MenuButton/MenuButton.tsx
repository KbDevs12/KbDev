import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
const MenuButton = ({ isOpen, toggleMenu }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        if (window.scrollY > projectSection.offsetTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="md:hidden hover:opacity-70" onClick={toggleMenu}>
      {isScrolled ? (
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          size={32}
          direction="right"
          duration={1}
          color="rgba(27,239,197,0.75)"
          rounded
        />
      ) : (
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          size={32}
          direction="right"
          duration={1}
          color="#F0F4EF"
          rounded
        />
      )}
    </div>
  );
};

export default MenuButton;
