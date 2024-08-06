function loco_motive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco_motive();
function menu() {
  var tl = gsap.timeline();
  var cross = document.querySelector("#cross");
  var menu = document.querySelector("#menu");

  tl.to("#full", {
    right: 0,
    duration: 0.3,
  });
  tl.from("#full h4", {
    x: 150,
    stagger: 0.2,
    opacity: 0,
    duration: 0.4,
  });
  tl.from("#full i", {
    x: 150,
    stagger: 0.2,
    opacity: 0,
    duration: 0.3,
  });
  tl.pause();

  menu.addEventListener("click", () => {
    tl.play();
  });
  cross.addEventListener("click", () => {
    tl.reverse();
  });
}
menu();

//Main page ka animation hai 
gsap.set("#slider",{
  scale:3
})

let tls=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    scrub:3,
    start:"top top",
    end:"bottom top",
    pin:true
  }
}
)
tls.to("#video-div",{
  '--clip':"0%",
  ease:Power2,
},'a')
tls.to("#slider",{
  scale:1,
  ease:Power2,
},'a')
tls.to("#row1",{
  x:-40
},'s')
tls.to("#row2",{
  x:-30
},'s')

//page 1 ka text and nav animation

let tlp1=gsap.timeline()
tlp1.from("nav",{
  opacity:0,
  y:-80,
  stagger:0.5,
  duration:1 
})
tlp1.from("#ani span",{
 opacity:0,
 y:-90,
 stagger:0.1
})


// Page 2 ka animation hai
let tlp2=gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    scrub:true,
   start:"top 80%",
   end:"top 60%"
  }
})
tlp2.from("#about h3",{
 opacity:0,
 y:50
})
tlp2.from("#para h4",{
  opacity:0,
  y:50,
  stagger:0.5
})

//page 3 ka animation hai

let tlp3=gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    scrub:4,
    pin:true,
    start:"top top",
  }
})
tlp3.to("#an1",{
 x:"-100%",
 display:"none"
},'a')
tlp3.to("#an2",{
 x:"-100%",
},'a')
tlp3.to("#an3",{
 x:"-100%",
 delay:0.1
},'a')