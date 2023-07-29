import { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar({
  handleNavButton,
  handleBarClicked,
  isBarClicked,
  currentPage,
  handleSize,
}) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    handleNavButton(isBarClicked);
  }, [isBarClicked]);

  const navButtonClick = () => {
    handleBarClicked((prevValue) => !prevValue);
    setIsPageLoaded(true);
  };

  const spinLeft = {
    animationName: "spinLeft",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const spinLeftUndo = {
    animationName: "spinLeftUndo",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const spinLeftBefore = {
    transform: "rotate(0) translateY(17px)",
  };

  const spinRight = {
    animationName: "spinRight",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const spinRightUndo = {
    animationName: "spinRightUndo",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const spinRightBefore = {
    transform: "rotate(0) translateY(-17px)",
  };

  const stretch = {
    animationName: "stretch",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const stretchUndo = {
    animationName: "stretchUndo",
    animationFillMode: "forwards",
    animationDuration: "500ms",
  };
  const stretchBefore = { transform: "scale(1)" };

  return (
    <>
      <div className={`navbar ${isBarClicked ? "nav-gray" : ""}`}>
        <div className="nav-button" onClick={navButtonClick}>
          <i
            style={
              isPageLoaded
                ? isBarClicked
                  ? spinLeft
                  : spinLeftUndo
                : spinLeftBefore
            }
            className={`fa-solid fa-minus bar-1 ${
              isBarClicked ? "bar-1-clicked" : ""
            }`}
            id="bar-1"
          ></i>
          <i
            style={
              isPageLoaded
                ? isBarClicked
                  ? spinRight
                  : spinRightUndo
                : spinRightBefore
            }
            className="fa-solid fa-minus bar-2"
            id="bar-1"
          ></i>
          <i
            style={
              isPageLoaded
                ? isBarClicked
                  ? stretch
                  : stretchUndo
                : stretchBefore
            }
            className={`fa-solid fa-minus bar-3 ${
              isBarClicked ? "bar-3-clicked" : ""
            }`}
            id="bar-1"
          ></i>
        </div>
        {currentPage === 'gallery' ? 
        <div className='size-select'>
        <div 
        onClick={()=>handleSize('small')} 
        className="small size-button">
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
        </div>
        <div 
        onClick={()=>handleSize('medium')} 
        className="medium size-button">
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>
          <div className="little-square"></div>

        </div>
        <div 
        onClick={()=>handleSize('large')} 
        className="large size-button">
          <div className="little-square"></div>

        </div>

        </div> 
        : 
        ''}
      </div>
    </>
  );
}
