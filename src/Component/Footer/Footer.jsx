
import './Footer.css';
import facebook from "../../assets/img/facebook.svg";
import linkedin from "../../assets/img/in.svg";
import twitter from "../../assets/img/twitter.svg";
import plactics from "../../assets/img/plastic.png";

import content from '../../assets/content'

function Footer({ lang }) {

  return(
    <>
    <footer className={ lang }>
    <div class="container">
    
    <ul class="footer-list-wrapper">
    <li class="list-group">
    <address>
    <h4 class="address">{content[lang].address}</h4>
    
    <p class="address-text">
    {content[lang].addressText}
    </p>
    </address>
    </li>
    
    <li class="list-group">
    <h4>{content[lang].footerServiceTitle}</h4>
    <a href="#">{content[lang].footerService1}</a>
    <a href="#">{content[lang].footerService2}</a>
    <a href="#">{content[lang].footerService3}</a>
    <a href="#">{content[lang].footerService4}</a>
    <a href="#">{content[lang].footerService5}</a>
    </li>
    
    <li class="list-group ">
    <h4>{content[lang].getInTouch}</h4>
    
    <a href="#">info@cloudbudget.com</a>
    <a href="#">+1 844-721-7120</a>
    <ul class="internet-link">
    <li class="internet-link-item">
    <a href="#"> <img src={ facebook } alt="facebook" width="15" height="15" /></a>
    <a href="#"><img src={ linkedin } alt="in" width="15" height="15" /></a>
    <a href="#"><img src={ twitter } alt="twitter" width="15" height="15" /></a>
    </li>
    </ul>
    </li>
    
    <li class="list-group">
    <h4>{content[lang].support}</h4>
    <img src={ plactics } alt="plastics" width="216" height="31" />
    </li>
    
    </ul>
    
    <div class="bottom">
    <p>{content[lang].copyright} 2018 CloudBudget</p>
    </div>
    
    </div>
    </footer>
    </>
    )
  }
  
  export default Footer;