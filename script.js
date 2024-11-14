var cur = document.querySelector("#cursor");
var curB = document.querySelector("#cursor-blur");
var cardsContainer = document.getElementById('cards-container');
var cards = document.querySelectorAll('.card');
var navH4 = document.querySelectorAll("#nav h4");
const arrow = document.getElementById('arrow');

let mouseX = 0;
let mouseY = 0;
let curX = 0;
let curY = 0;
let curBX = 0;
let curBY = 0;

document.addEventListener("mousemove", function(dets) {
    mouseX = dets.x - 10;  // Offset for main cursor
    mouseY = dets.y - 10;
});

function animate() {
    // Smoothly interpolate positions
    curX += (mouseX - curX) * 0.1;
    curY += (mouseY - curY) * 0.1;
    curBX += (mouseX - curBX - 215) * 0.05; // Offset for blurred cursor
    curBY += (mouseY - curBY - 215) * 0.05;
  
    cur.style.left = curX + "px";
    cur.style.top = curY + "px";
    curB.style.left = curBX + "px";
    curB.style.top = curBY + "px";
  
    requestAnimationFrame(animate);
}

animate();

// Track cursor movement
document.addEventListener("mousemove", function(dets) {
    cur.style.left = dets.x - 10 + "px";
    cur.style.top = dets.y - 10 + "px";

    curB.style.left = dets.x - 225 + "px";
    curB.style.top = dets.y - 225 + "px";
});

// Animate nav background color on scroll
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

// Animate main background color on scroll
gsap.to("#main", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
});

// Parallax rotation effect on cards container
cardsContainer.addEventListener('mousemove', (e) => {
    const containerRect = cardsContainer.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;
    
    const offsetX = (e.clientX - containerCenterX) / 40;
    const offsetY = (e.clientY - containerCenterY) / 40;
    
    cards.forEach((card) => {
        card.style.transform = `rotateX(${offsetY}deg) rotateY(${-offsetX}deg)`;
    });
});

// Reset rotation on mouseleave
cardsContainer.addEventListener('mouseleave', () => {
    cards.forEach((card) => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// Hover effect for nav items
navH4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cur.style.transform = "scale(4)";
        cur.style.border = "1px solid rgba(255, 255, 255, 0.4)";
        cur.style.backgroundColor = "transparent";
    });
    
    elem.addEventListener("mouseleave", function() {
        cur.style.transform = "scale(1)";
        cur.style.border = "none";
        cur.style.backgroundColor = "#95c11e";
    });
});

// Hover effect for cards
cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        cur.style.transform = "scale(4)";
        cur.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        cur.style.backgroundColor = "transparent";
    });
    
    card.addEventListener("mouseleave", function() {
        cur.style.transform = "scale(1)";
        cur.style.border = "none";
        cur.style.backgroundColor = "#95c11e";
    });
});

// GSAP animations for about-us section
gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 55%",
        scrub: 1
    }
});

// GSAP animations for card section
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 55%",
        scrub: 1
    }
});

gsap.from("#colon1", {
  x:-70,
  y:-70,
  duration: 1,
  scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 80%",
      end: "top 50%",
      scrub: 4
  }
});

gsap.from("#colon2", {
  x: 70,
  y: 70,
  duration: 1,
  scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 80%",
      end: "top 50%",
      scrub: 4
  }
});

gsap.from("#page4 h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 3
  }
})

arrow.addEventListener('click', function () {
  const page2 = document.getElementById('page2');
  page2.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("mousemove", (e) => {
  const page3 = document.getElementById("quote-floating");
  
  // Get mouse position relative to the viewport
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculate the center of the page (or the element you want to move)
  const pageCenterX = window.innerWidth / 2;
  const pageCenterY = window.innerHeight / 2;

  // Calculate the mouse's movement relative to the center of the page
  const deltaX = (mouseX - pageCenterX) / pageCenterX;
  const deltaY = (mouseY - pageCenterY) / pageCenterY;

  // Apply the movement in the opposite direction with a smaller multiplier for a 'floating' effect
  const movementStrength = 20; // Controls the intensity of the floating effect
  const movementX = deltaX * movementStrength;
  const movementY = deltaY * movementStrength;

  // Apply the transformation to the page (slightly move the page in the opposite direction)
  page3.style.transform = `translate3d(${-movementX}px, ${-movementY}px, 0)`;

});
