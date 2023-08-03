import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



gsap.registerPlugin(TextPlugin, ScrollTrigger);

export const animateHome = () => {
  heroArea();
  currentMind();
  techStack();
  // showProjects();
  hireMeAnimate();
};

let heroArea = () => {
  const words = [
    ` Kamran. `,
    ` A Developer. `,
    ` A Book Lover. `,
    ` A Tech Enthusiast. `,
  ];
  gsap.to(".cursor", {  
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
    delay: 2,
  });

  gsap.fromTo(
    ".profile-img",
    {
      scale: 1,
    },
    {
      scale: 1.1,
      duration: 5,
      repeat: -1,
      yoyo: true,
    }
  );

  let boxTl = gsap.timeline();

  boxTl
    .from(".box", {
      duration: 1,
      width: "0%",
      delay: 0.5,
      ease: "power4.inOut",
    })

    .from(".hi", {
      duration: 0.5,
      opacity: 0,
      y: "-90%",
      onComplete: () => masterTl.play(),
    });

  let masterTl = gsap.timeline({ repeat: -1 }).pause();
  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to(".change-text", { duration: 1, text: word });
    masterTl.add(tl);
  });
};

const currentMind = () => {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
  });

  gsap.to(".current-working", {
    scrollTrigger: {
      trigger: ".current-mind",
      scrub: 1,
    },
    duration: 2,
    y: "30%",
  });
};

const techStack = () => {
  let stack = [
    `bootstrap`,
    `bitbucket`,
    `css`,
    `github`,
    `html`,
    `js`,
    `mongo`,
    `node`,
    `nuxt`,
    `sql`,
    `vue`,
    `vuetify`,
  ];
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".tech-stack",
      scrub: 1,
      start: "top top",
      end: "+=1000",
    },
  });
  stack.forEach((item) => {
    tl.fromTo(
      `#` + item,
      { scale: 0 },
      { scale: 1, duration: 0.3, ease: `slow` }
    );
  });
};

const showProjects = () => {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
  });

  gsap.from(".overlay", {
    scrollTrigger: {
      trigger: ".projects",
      scrub: 1,
      end:"+=1500"

    },
    duration: 3,
    y: "180%",
  });
};

export const hoverBtn = () => {
  let tl = gsap.timeline();

  tl.to(".project-btn-back", {
    width: "160px",
    duration: 0.5,
    ease: "slowMo",
  });
};

export const unHoverBtn = () => {
  let tl = gsap.timeline();

  tl.to(".project-btn-back", {
    width: "50px",
    duration: 0.5,
    ease: "slowMo",
  });
};

let hireMeAnimate = () => {

let slides = document.querySelectorAll(".hire-text")
let list = document.querySelector(".hire-me-area")
var vsOpts = {
  slides: slides,
  list: list,
  duration: 10,
  lineHeight: 45,
};

let vSlide = gsap.timeline({
  paused: true,
  repeat: -1,
});


for (var i = 0; i < vsOpts.slides.length; i++) { 
  vSlide.to(vsOpts.list, vsOpts.duration / vsOpts.slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    // ease: Elastic.easeOut.config(1, 0.4),
    ease: "elastic.out",
  });
}

vSlide.play();

};
