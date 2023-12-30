"use strict";

import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import AOS from 'aos';
import MicroModal from 'micromodal';
import "./modules/scrollTriggers.js";
import "./modules/header.js";
import "./modules/spoilers.js";
import "./modules/portfolio-view.js";
import "./modules/sliders.js";
import "./modules/gsap.js";
import "./modules/feedback-form.js";
import "./modules/faq-form.js";
import "./modules/fast-consult-form.js";

function app() {
  useDynamicAdapt("max");
  MicroModal.init({
    disableScroll: true
  });
  AOS.init({
    once: true,
    duration: 800,
    offset: 120, 
    easing: 'ease-in-out',
  })
}

document.addEventListener("DOMContentLoaded", app);
