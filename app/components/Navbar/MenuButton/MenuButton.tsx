import { List } from "@phosphor-icons/react";
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
        <List size={32} color="#B4CDED" weight="fill" />
      ) : (
        <List size={32} color="#0D1821" weight="fill" />
      )}
    </div>
  );
};

export default MenuButton;
