import { gsap } from "gsap";


export const initAnime = () => { 
  let tl = gsap.timeline() 

  gsap.from(".project-row", { 
    yPercent: 100,
    duration:1,
    ease:"slowMo.in",
    stagger:0.5
  })
}