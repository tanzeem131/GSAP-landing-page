var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

tl.from(".allImg", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});

gsap.fromTo(
  "#img4",
  { rotation: 0 },
  {
    rotation: 360,
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: "none",
    duration: 5,
  }
);
