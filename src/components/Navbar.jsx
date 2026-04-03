import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { profileImg, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const navIds = ["about", "work", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = navIds.map((id) => ({
    id,
    title: t.nav[id],
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={profileImg}
            alt='Dhruv Sonani'
            className='w-14 h-14 rounded-full object-cover border-2 border-[#915EFF] cursor-pointer hover:border-white transition-all duration-300'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPhoto(true);
            }}
          />

          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Dhruv &nbsp;
            <span className='sm:block hidden'>Sonani</span>
          </p>
        </Link>

        <div className='hidden sm:flex flex-row items-center gap-10'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='flex items-center bg-tertiary rounded-full p-1 gap-0'>
            <button
              onClick={() => toggleLanguage("de")}
              className={`px-3 py-1 rounded-full text-[14px] font-medium transition-all duration-300 ${
                language === "de"
                  ? "bg-[#915EFF] text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-3 py-1 rounded-full text-[14px] font-medium transition-all duration-300 ${
                language === "en"
                  ? "bg-[#915EFF] text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-3'>
          <div className='flex items-center bg-tertiary rounded-full p-1'>
            <button
              onClick={() => toggleLanguage("de")}
              className={`px-2 py-1 rounded-full text-[12px] font-medium transition-all duration-300 ${
                language === "de"
                  ? "bg-[#915EFF] text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-2 py-1 rounded-full text-[12px] font-medium transition-all duration-300 ${
                language === "en"
                  ? "bg-[#915EFF] text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showPhoto && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
          onClick={() => setShowPhoto(false)}
        >
          <div className='relative max-w-lg w-[90%] animate-fade-in'>
            <button
              className='absolute -top-10 right-0 text-white text-3xl font-bold hover:text-[#915EFF] transition-colors'
              onClick={() => setShowPhoto(false)}
            >
              &times;
            </button>
            <img
              src={profileImg}
              alt='Dhruv Sonani'
              className='w-full rounded-2xl border-4 border-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.4)]'
              onClick={(e) => e.stopPropagation()}
            />
            <p className='text-white text-center mt-4 text-lg font-semibold'>Dhruv Sonani</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
