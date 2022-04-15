import { gsap } from "gsap";

export const moveHeader = () => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from("#main-logo", { x: "-100px", ease: "power2.in" })
    .from(".custom-nav", { y: "-100px", ease: "bounce" });
};


export const underlineAnime = () => {
  // Mouseenter function
  function enterAnimation(link, e, index) {
    link.tl.tweenFromTo(0, "midway");
  }

  // Mouseleave function
  function leaveAnimation(link, e) {
    link.tl.play();
  }

  // Get all links
  let workLinks = document.querySelectorAll(".custom-nav");

  workLinks.forEach((link, index, value) => {
    let underline = link.querySelector(".underline");
    link.tl = gsap.timeline({ paused: true });
    
    link.tl.fromTo(
      underline,
      {
        width: "0%",
        left: "0%",
      },
      {
        width: "100%",
        duration: 0.5,
        ease: "slow",
      }
    );

    link.tl.add("midway");

    link.tl.fromTo(
      underline,
      {
        width: "100%",
        left: "0%",
      },
      {
        width: "0%",
        left: "100%",
        duration: 0.5,
        ease: "slow",
        immediateRender: false,
      } 
    );

    // Mouseenter
    link.addEventListener("mouseenter", (e) => {
      enterAnimation(link, e, index);
    });

    // Mouseleave
    link.addEventListener("mouseleave", (e) => {
      leaveAnimation(link, e);
    });
  });
}
