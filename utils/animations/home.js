import { gsap} from "gsap";
import { TextPlugin  } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const heroArea = () => {
  const words = [
    ` Kamran. `,
    ` A Developer. `,
    ` A Book Lover. `,
    ` A Tech Enthusiast. `,
  ];
  gsap.to(".cursor", {opacity:0, ease:"power2.inOut",repeat: -1,delay:2})
  gsap.to(".profile-img", {
    scale: 1.15,
    ease: "slowMo",
    duration: 7,
    delay: 1,
  });

  let boxTl = gsap.timeline()

  boxTl
    .from(".box", {
      duration: 1,
      width: "0%",
      delay: 0.5,
      ease: "power4.inOut",
    })

    .from(".hi", {
      duration: 0.5,
      opacity:0,
      y: "60%",
      onComplete: () => masterTl.play(),
    });

  let masterTl = gsap.timeline({repeat:-1}).pause();
    words.forEach((word) => {
      let tl = gsap.timeline({repeat: 1, yoyo:true,repeatDelay: 1});
      tl.to(".change-text", { duration: 1, text: word});
      masterTl.add(tl);
    });

};

export const typeWriting = () => { 

}

