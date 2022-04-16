import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export const animateHome = () => {
  heroArea();
  currentMind();
  techStack();
  showProjects();
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

  gsap.fromTo(".profile-img", {
    scale: 1,
  }, { 
    scale:1.1,  
    duration: 5,
    repeat:-1,
    yoyo:true
  });

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
      scrub:1
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
      scrub:1,
      start:'top 30%',
      end:"bottom 180%"
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
      },
        duration:3,
        y:"150%",
    });
}




