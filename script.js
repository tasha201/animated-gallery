const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 2,
    start: "top top",
    end: "50%+=500px",
  }
});

tl.to(".items img", { scale: 1 }, 0);
tl.to(".items", { scale: 1.4, rotate: 0 }, 0);

tl.to(".overlay", { height: "100%" }, 0.2);
tl.to(".overlay h1", { scale: 1 }, 0.6);
tl.to(".items", { scale: 0.8, opacity: 0.2 }, 0.6);