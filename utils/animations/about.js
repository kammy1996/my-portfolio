import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin( ScrollTrigger);

export const animateAbout = () => { 
  titleArea();
  journeyArea();
  inspirationArea();

}

function titleArea() { 
var tl = gsap.timeline({ paused: true });

tl.fromTo(".img-holder", { yPercent: -100 }, { duration: 3, yPercent: 0 })
  .fromTo(".img-holder .title-img", { yPercent: 100 }, { duration: 2, yPercent: 0 }, "<")
  .reverse();

  tl.play();

  let textTL = gsap.timeline() 

  textTL.from('.title-heading', {
    x:"-100%",
    duration:1.5
  }).from('.title-sub-text', { 
      x:"150%",
      duration:1.5
  }).fromTo('.scroll-bar-icon', { 
      y:"0%",
      autoAlpha:0,
    }, { 
      y:"100%",
      autoAlpha:1
    })
}

function journeyArea() { 
  let tl = gsap.timeline() 

  tl.to(".green-circle", { 
    scale:.8,
    duration:1,
    ease:"slowMo",
    repeat:-1,
    yoyo:true,
  })
}

function inspirationArea() { 

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
  });

  gsap.from(".inspiration-box", {
    scrollTrigger: {
      trigger: ".inspiration-title",
      scrub: 1,
      start: "top 100%",
      end: "+=300",
    },
    duration: 1.5,
    stagger: 0.5,
    y: "30%",
    ease: "power3.in",
  });
}