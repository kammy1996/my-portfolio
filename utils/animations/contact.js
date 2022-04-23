import { gsap } from "gsap";
// import { gsap } from "gsap"
import { CustomEase } from "gsap/dist/CustomEase";


gsap.registerPlugin(CustomEase);

export const initAnime = () => { 
  animateContact();
}

let animateContact = () => { 
  let tl = gsap.timeline({duration:.5})

  tl
  .from(".contact-title",{ 
    yPercent:100,
    autoAlpha:0
  })
  .from(".email-line",{ 
    autoAlpha:0,
    yPercent:100,
  })
  .from(".contact-form",{ 
    autoAlpha:0,
    yPercent:100,
    stagger:.5
  })

}