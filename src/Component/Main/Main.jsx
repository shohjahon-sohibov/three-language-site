// import { useState } from 'react';

import './Main.css';

import content from '../../assets/content'

// import all images from img folder
import videoSection from "../../assets/img/Video-Section.png";
import card1 from "../../assets/img/card-1.png";
import card2 from "../../assets/img/card-2.png";
import card3 from "../../assets/img/card-3.png";
import first from "../../assets/img/01.png";
import download from "../../assets/img/Frame-3.png";
import second from "../../assets/img/02.png";
import search from "../../assets/img/Frame-4.png";
import third from "../../assets/img/03.png";
import pdf from "../../assets/img/Frame-6.png";
import fourth from "../../assets/img/04.png";
import csv from "../../assets/img/Frame-5.png";
import playMarket from "../../assets/img/link-1.png";
import playMarket1 from "../../assets/img/link-2.png";
import playStore from "../../assets/img/link-3.png";
import video1 from "../../assets/img/Video_bg-1.png"
import video2 from "../../assets/img/Video_bg-2.png"
import video3 from "../../assets/img/Video_bg-3.png"

function Main({ lang }) {

  return (
    
    <>
    <main className={ lang }>
    <div class="container">
    
    <section class="video">
    <div class="video-content">
    <h2 class="video-content-title">{content[lang].videoContentTitle}</h2>
    
    <p class="video-content-text">{content[lang].videoContentText}</p>
    
    <a class="video-content-link" href="#">{content[lang].videoContentLink}</a>
    </div>
    
    <img src={ videoSection } alt="video" width="478" height="311" />
    </section>
    
    <section class="features-bg">
    <div class="container">
    
    <header class="features-header">
    <h3 class="features-title">{content[lang].featuresTitle}</h3>
    </header>
    
    <main>
    <ul class="card-wrapper">
    
    <li class="card-1">
    
    <img class="card-1-img" src={ card1 } alt="card 1 photo" width="350" height="250" />
    
    <ul class="card-1-content-wrapper">
    <li class="card-1-content">
    <h4 class="card-title-1">{content[lang].cardTitle1}</h4>
    
    <p class="card-text-1">{content[lang].cardText1}</p>
    
    <a class="card-link-1" href="#">{content[lang].cardLink1}</a>
    </li>
    </ul>
    </li>
    
    <li class="card-2">
    
    <img class="card-2-img" src={ card2 } alt="card 2 photo" width="350" height="250" />
    
    <ul class="card-2-content-wrapper">
    <li class="card-2-content">
    <h4 class="card-title-2">{content[lang].cardTitle2}</h4>
    
    <p class="card-text-2">{content[lang].cardText2}</p>
    
    <a class="card-link-2" href="#">{content[lang].cardLink2}</a>
    </li>
    </ul>
    </li>
    
    <li class="car-3">
    
    <img class="card-3-img" src={ card3 } alt="card 3 photo" width="350" height="250" />
    
    <ul class="card-3-content-wrapper">
    <li class="card-3-content">
    <h4 class="card-title-3">{content[lang].cardTitle3}</h4>
    
    <p class="card-text-3">{content[lang].cardText3}</p>
    
    <a class="card-link-3" href="#">{content[lang].cardLink3}</a>
    </li>
    </ul>
    </li>
    
    </ul>
    </main>
    
    </div>
    </section>
    
    <section class="technology">
    <header class="technology-header">
    <h3 class="technology-title">{content[lang].technologyTitle}</h3>
    </header>
    
    <main class="technology-main">
    <ul class="technology-list-wrapper">
    
    <li class="technology-list-item-1">
    <img src={ first } alt="01" width="117" height="100" />
    
    <img class="list-item-1-img" src={ download } alt="download" width="80" height="80" />
    
    <h4 class="technology-list-item-title-1">{content[lang].technologyListItemTitle1}</h4>
    
    <p class="technology-list-item-text-1">{content[lang].technologyListItemText1}</p>
    </li>
    
    <li class="technology-list-item-2">
    <img src={ second } alt="02" width="117" height="100" />
    
    <img class="list-item-2-img" src={ search } alt="search" width="66" height="66" />
    
    <h4 class="technology-list-item-title-2">{content[lang].technologyListItemTitle1}</h4>
    
    <p class="technology-list-item-text-2">{content[lang].technologyListItemText1}</p>
    
    </li>
    
    <li class="technology-list-item-3">
    <img src={ third } alt="03" width="117" height="100" />
    
    <img class="list-item-3-img" src={ pdf } alt="pdf" width="66" height="64" />
    
    <h4 class="technology-list-item-title-3">{content[lang].technologyListItemTitle1}</h4>
    
    <p class="technology-list-item-text-3">{content[lang].technologyListItemText1}</p>
    </li>
    
    <li class="technology-list-item-4">
    <img src={ fourth } alt="04" width="117" height="100" />
    
    <img class="list-item-4-img" src={ csv } alt="csv" width="47" height="53" />
    
    <h4 class="technology-list-item-title-4">{content[lang].technologyListItemTitle1}</h4>
    
    <p class="technology-list-item-text-4">{content[lang].technologyListItemText1}</p>
    </li>
    
    </ul>
    </main>
    </section>
    
    <section class="bg-red">
    <div class="container">
    <main class="bg-red-main">
    <div class="left">
    <h3 class="left-title">{content[lang].leftTitle}</h3>
    
    <p class="left-text">{content[lang].leftText}</p>
    
    <ul class="download-link">
    <li class="download-link__list">
    <a href="#"><img src={ playMarket } alt="play market" /></a>
    </li>
    
    <li class="download-link__list">
    <a href="#"><img src={ playMarket1 } alt="play market" /></a>
    </li>
    
    <li class="download-link__list">
    <a href="#"><img src={ playStore } alt="play store" /></a>
    </li>
    </ul>
    </div>
    
    <div class="slider">
    
    <img class="slider-1" src={ video1 } alt="video 1" width="383" height="267" />
    
    <img class="slider-2" src={ video2 } alt="video 2" width="383" height="267" />
    
    <img class="slider-3" src={ video3 } alt="video 2" width="445" height="311" />
    
    </div>
    </main>
    </div>
    </section>
    
    <section class="contact">
    <div class="contact-left">
    <h3 class="contact-title">{content[lang].contactTitle}</h3>
    
    <p class="contact-text">{content[lang].contactText}</p>
    </div>
    
    <form action="#">
    <div class="names">
    <input class="name-input" type="text" placeholder="First name" required autocomplete="off" />
    <input class="name-input" type="text" placeholder="Last name" required autocomplete="off" />
    </div>
    
    <input type="number" placeholder="Phone Number" required autocomplete="off" />
    
    <select name="service" id="service" required autocomplete="off">
    <optgroup>
    <option disabled selected hidden value="Select Service">{content[lang].selectService}</option>
    <option value="service-1">{content[lang].service1}</option>
    <option value="service-2">{content[lang].service2}</option>
    <option value="service-3">{content[lang].service3}</option>
    <option value="service-4">{content[lang].service4}</option>
    <option value="service-5">{content[lang].service5}</option>
    </optgroup>
    </select>
    
    <button class="form-btn" type="submit">{content[lang].submitBtn}</button>
    </form>
    </section>
    </div>
    </main>
    </>
    )
  }
  
  export default Main;