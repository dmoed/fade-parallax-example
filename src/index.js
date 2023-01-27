import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".parallax-wrapper",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
    });

    tl.to(".parallax-wrapper .layer", {y: -100, ease: "none", opacity: 0, display: "none"}, 0)
})