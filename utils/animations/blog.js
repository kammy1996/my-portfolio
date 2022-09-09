import { gsap } from "gsap";


export const initAnime = () => { 
  let tl = gsap.timeline() 

  gsap.from(".blog", { 
    yPercent: 100,
    duration:1,
    delay:0.2,
    ease:"slowMo.in",
    stagger:0.5
  })
}