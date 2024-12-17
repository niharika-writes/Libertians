Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1

})

Shery.makeMagnet('.navleft ul', 'button')
Shery.makeMagnet('h4')
Shery.makeMagnet('.msgbox h1')

// Initialize Lenis
const lenis = new lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
