// import { useState } from 'react';

import './Header.css';
import content from '../../assets/content'
import logo from "../../assets/img/Group-3.svg";

// import img from ''

function Header({ lang, setLanguage }) {
  
  function onChange(e) {
    setLanguage(e.target.value);
  }
  
  return(
    <>
    <section className={ lang }>
    <section class="hero-img">
    <div class="container">
    <header>
    
    <div class="logo">
    <a href="#"><img src={ logo } alt="logo of page" width="172" height="29" /></a>
    </div>
    
    <nav>
    <ul class="nav-list-wrapper">
    <li class="nav-list-item"><a href="#">{content[lang].navItem1}</a></li>
    <li class="nav-list-item"><a href="#">{content[lang].navItem2}</a></li>
    <li class="nav-list-item"><a href="#">{content[lang].navItem3}</a></li>
    <li class="nav-list-item"><a href="#">{content[lang].navItem4}</a></li>
    <li class="nav-list-item"><a href="#">{content[lang].navItem5}</a></li>
    </ul>
    </nav>
    
    <div class="right-header">
    
    <select class="language-select" name="lang" id="lang" defaultValue={lang} onChange={onChange}>
    <option value="uz">Uzbek</option>
    <option value="eng">English</option>
    <option value="ru">русский</option>
    </select>
    
    <div class="login">
    <a class="login-link" href="#">{content[lang].logIn}</a>
    </div>
    </div>
    
    </header>
    
    <div class="hero-content">
    <h1 class="hero-title">cloudbudget</h1>
    
    <p class="hero-text">
    {content[lang].heroText}
    </p>
    
    <a class="sign-up" href="#">{content[lang].navItem5}</a>
    </div>
    
    </div>
    </section>
    </section>
    </>
    )
  }
  
  export default Header;