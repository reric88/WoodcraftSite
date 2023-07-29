import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="top-div div-1">
          <div className="sub-div">
            <img
              src="/WoodcraftSite/dominik-scythe-unsplash.jpg"
              className="about-img"
              alt=""
            />
          </div>
          <div className="sub-div desc-div">
            <h2>Photographer:</h2>
            <a href="https://unsplash.com/@drscythe">Dominik Scythe</a>
            <div className="blurb"></div>
            <p>
              Musician as 'DrScythe', not for hire because: who has the desire
              to hire a macro guy?
            </p>
          </div>
        </div>
        <div className="top-div div-2">
          <div className="sub-div">
            <img
              src="/WoodcraftSite/andrea-lambrecht-unsplash.jpg"
              className="about-img"
              alt=""
            />
          </div>
          <div className="sub-div desc-div">
            <h2>Photographer:</h2>
            <a href="https://unsplash.com/@sullystudios">Andrea Lambrecht</a>
            <div className="blurb"></div>
            <p>
              Download free, beautiful high-quality photos curated by Andrea.
            </p>
          </div>
        </div>
        <div className="top-div div-3">
          <div className="sub-div">
            <img src="/WoodcraftSite/jan-kahanek-unsplash.jpg" className="about-img" alt="" />
          </div>
          <div className="sub-div desc-div">
            <h2>Photographer:</h2>
            <a href="https://unsplash.com/@honza_kahanek">Jan Kahanek</a>
            <div className="blurb"></div>
            <p>I love macro photo.</p>
          </div>
        </div>
      </div>
    </>
  );
}
