var cur=document.querySelector("#cursor")
var curB=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x-10+"px"
    cur.style.top=dets.y-10+"px"

    curB.style.left=dets.x-225+"px"
    curB.style.top=dets.y-225+"px"
})

gsap.to("#nav",{
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

gsap.to("#main",{
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
})

const cardsContainer = document.getElementById('cards-container');
const cards = document.querySelectorAll('.card');

cardsContainer.addEventListener('mousemove', (e) => {
  // Get container's center position
  const containerRect = cardsContainer.getBoundingClientRect();
  const containerCenterX = containerRect.left + containerRect.width / 2;
  const containerCenterY = containerRect.top + containerRect.height / 2;

  // Calculate offset based on cursor position relative to container center
  const offsetX = (e.clientX - containerCenterX) / 40;
  const offsetY = (e.clientY - containerCenterY) / 40;

  // Apply the same rotation to all cards
  cards.forEach((card) => {
    card.style.transform = `rotateX(${offsetY}deg) rotateY(${-offsetX}deg)`;
  });
});

// Reset the rotation when the cursor leaves the container
cardsContainer.addEventListener('mouseleave', () => {
  cards.forEach((card) => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});
