gsap.to("#navbar",{
    backgroundColor: "#90EE80",
    duration: 1,
    height: "80px",
    marginTop:"-10px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("a",{
    color:"#000",
    scrollTrigger:{
        trigger:"a",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#in-about-us",{
    y:50,
    opacity: 1,
    duration:10,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#in-about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub: 3
    }
})
gsap.from("#about-us img",{
    y:50,
    opacity: 1,
    duration:10,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about-us img",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub: 3
    }
})



