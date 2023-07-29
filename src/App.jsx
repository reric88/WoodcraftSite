import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Credit from "./components/Credit";

function App() {
  const [navButtonClicked, setNavButtonClicked] = useState(null);
  const [isBarClicked, setIsBarClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentBG, setCurrentBG] = useState("");
  const [size, setSize] = useState('small')
  const [array, setArray] = useState([
    "/duy-vo-unsplash.jpg",
    "/dyah-arum-unsplash.jpg",
    "/erik-mclean-unsplash.jpg",
    "/graham-ruttan-unsplash.jpg",
    "/mario-la-pergola-unsplash.jpg",
    "/mario-la-pergola-unsplash2.jpg",
    "/matt-benson-unsplash.jpg",
    "/nguyen-dang-hoang-nhu-unsplash.jpg",
    "/paul-hanaoka-unsplash.jpg",
  ]);

  useEffect(() => {
    setCurrentBG(currentPage);
  }, [currentBG]);

  useEffect(() => {
    if (array.length < 50) {
      addMoreImages();
    }
  }, [array]);

  const handleNavButton = (e) => {
    setNavButtonClicked(e);
  };

  const handleBarClicked = (e) => {
    setIsBarClicked(e);
  };

  const handleGetCurrentPage = (e) => {
    setCurrentPage(e);
  };

  const addMoreImages = () => {
    let i;
    for (i = 0; i < 50; i++) {
      const choice = Math.floor(Math.random() * 10);
      setArray([...array, array[choice]]);
    }
  };

  const handleSize = (e) => {
    setSize(e)
  }

  return (
    <>
      <NavMenu
        handleNavButton={handleNavButton}
        navButtonClicked={navButtonClicked}
        setPage={handleGetCurrentPage}
        handleBarClicked={handleBarClicked}
      />
      <Navbar
        navButtonClicked={navButtonClicked}
        handleNavButton={handleNavButton}
        handleBarClicked={handleBarClicked}
        isBarClicked={isBarClicked}
        currentPage={currentPage}
        handleSize={handleSize}
        size={size}
      />
      {currentPage === "gallery" ? <Gallery array={array} size={size} /> : ""}
      {currentPage === "home" ? <Home /> : ""}
      {currentPage === "about" ? <About /> : ""}
      {currentPage === "contact" ? <Contact /> : ""}
      {currentPage === 'credit' ? <Credit /> : ''}
    </>
  );
}

export default App;
