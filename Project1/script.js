function pageanimation() {
  var tl = gsap.timeline();

  tl.from("nav #logo,#navbar h4,#navbar button", {
    y: -100,
    opacity: 0,
    delay: 0.6,
    duration: 0.4,
    stagger: 0.2,
  });
  tl.from("#cenpart1 h1", {
    x: -400,
    opacity: 0,
  });
  tl.from("#cenpart1 p", {
    x: -200,
    opacity: 0,
  });
  tl.from("#cenpart1 button", {
    x: -200,
    opacity: 0,
  });
  tl.from(
    "#cenpart2",
    {
      opacity: 0,
      x: 200,
    },
    "-=1"
  );
  tl.from("#company img", {
    opacity: 0,
    x: -200,
    duration: 0.3,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#company",
      scroller: "body",
      start: "top 80%",
    },
  });
}
pageanimation()

var tl2=gsap.timeline({
   scrollTrigger:{
      trigger:".section2",
      scroller:"body",
      start:"top 70%",
      end:"top 0",
      scrub:4

   }
})
tl2.from("#service",{
   y:-30,
   opacity:0,
   duration:0.5
})
tl2.from(".elem",{
   x:-200,
   opacity:0,
   stagger:0.4
})
