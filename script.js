var cur=document.querySelector("#cursor")
var curB=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"

    curB.style.left=dets.x+"px"
    curB.style.top=dets.y+"px"
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