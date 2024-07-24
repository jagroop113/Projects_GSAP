function CursorEffect() {
  var p1cont = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  p1cont.addEventListener("mousemove", (detch) => {
    gsap.to("#cursor", {
      x: detch.x,
      y: detch.y,
      duration: 0.4,
      ease: "bounce.Out",
    });
  });
  p1cont.addEventListener("mouseenter", (detch) => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  p1cont.addEventListener("mouseleave", (detch) => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
CursorEffect();
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

function AnimationPage2() {
  gsap.from("#page2>p", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
  gsap.from("#header>h1,#line", {
    opacity: 0,
    y: 80,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 87%",
      end: "top 46%",
      scrub: 2,
    },
  });
}
AnimationPage2();

gsap.from("#page3top h4,#page3top h3,#page3top h2", {
  opacity: 0,
  y: 80,
  stagger: 0.1,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 87%",
    end: "top 46%",
    scrub: 2,
  },
});

let tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  x: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
});
tl.from("#page1-content h1 span", {
  y: 20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
  delay: -0.5,
});
tl.to("#loader", {
  display: "none",
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  
});
