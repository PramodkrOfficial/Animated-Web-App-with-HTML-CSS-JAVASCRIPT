function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -300,
        delay: 1,
        opacity: 0,
        duration: 0.9
    })

    tl.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.5
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })

    tl.from(".center-part2  img", {
        x: 200,
        opacity: 0,
        duration: 0.4
    }, "-=0.5")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.9
    })

}

page1Animation()


function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top -50%",
            scrub: 2,
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })

    //  Line1
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1

    }, "anim1")

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")

    //  Line2
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2")

    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")
}

page2Animation()

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            scroller: "body",
            start: "top 160%",
            end: "top 0%",
            // markers: true,
            scrub: 2,
    
        }
    })
    
    tl3.from(".footer li", {
        y: -300,
        opacity: 0,
        duration: 0.8,
        // stagger: 0.1
    })
    
    tl3.from(".footer-rights", {
        x: 150,
        opacity: 0,
        duration: 1
    })
}

page3Animation()




