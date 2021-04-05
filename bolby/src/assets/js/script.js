'use strict';

import parallaxMain from './_parallax';
import textChange from './_textChange';
import animations from './_animate';
import scrollToPage from './_scrollToPage';
import checkScroll from './_checkScroll';
import stickyNav from './_sticky';
import toTop from './_toTopBtn';
import clickBtn from './_btn';
import filter from './_filter';
import AOS from 'aos';
import Splide from '@splidejs/splide';





window.addEventListener("DOMContentLoaded", () => {
  parallaxMain();
  scrollToPage();
  clickBtn();
  textChange();
  filter();
  new Splide('.splide').mount();
  animations();

  window.addEventListener("scroll", () => {
    AOS.init();
    stickyNav();
    checkScroll();
    toTop();
  });
});
