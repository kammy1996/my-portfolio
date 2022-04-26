import { gsap } from "gsap";
import { TimelineLite } from "gsap";

gsap.registerPlugin(TimelineLite);

export const initAnime = () => {
  let navigation = new TimelineLite({ paused: true, reversed: true });
  navigation
    .to("#navigationWrap", 0.5, { opacity: 1, display: "block" })
    .to(".navbar", 0.2, { opacity: 0 }, "-=0.1")
    .to(".close", 0.1, { display: "block", opacity: 1 }, "-=0.1")
    .from(".menu", 0.5, { opacity: 0, y: 30 })
    .from(".social", 0.5, { opacity: 0 });


  document.querySelector('.navbar').addEventListener("click", () => {
    navigation.reversed() ? navigation.play() : navigation.reverse();
    })

  document.querySelector('.close').addEventListener("click", () => {
    navigation.reversed() ? navigation.play() : navigation.reverse();
  })

  let tags = document.querySelectorAll(".menu ul li")
  tags.forEach((item) => {
    item.addEventListener("click", () => {
      navigation.reversed() ? navigation.play() : navigation.reverse();
    });
  })
  
};


