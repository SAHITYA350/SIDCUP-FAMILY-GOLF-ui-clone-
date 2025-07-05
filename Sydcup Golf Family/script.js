if (window.innerWidth > 768) {
  var crsr = document.querySelector("#cursor");
  var blr = document.querySelector("#cursor-blur");

  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blr.style.left = dets.x - 250 + "px";
    blr.style.top = dets.y - 250 + "px";
  });
}

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
   });

     elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
   });
});

gsap.to('#nav',{
    backgroundColor: "#000",
    height: '110px',
    duration : 0.5,
    scrollTrigger : {
       trigger: "#nav",
       scroller: "body",
    //    markers: true,
       start:"top -10%",
       end:"top -11%",
       scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger : {
       trigger: "#main", 
       scroller: "body",        
    //    markers: true,
       start:"top -30%",
       end:"top -80%",
       scrub: 1
    }
})

gsap.from("#about-us img, #about-us-in", {
  y: 100,
  z: -100,
  opacity: 0,
  rotateX: -15,
  ease: "power3.out",
  duration: 2,
  stagger: 0.2,
  transformOrigin: "center center",
  perspective: 800,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2,
    // markers: true
  }
});


gsap.from(".card",{
scale : 0.8,
opacity:0,
duration: 1,
scrollTrigger:{
   trigger: ".card",
   scroller: "body",
   // markers: true,
   start:"top 70%",
   end : "top 65%",
   scrub:1
}
});

// Unique animation for colon1 - diagonally slide in with rotation
gsap.from("#colon1", {
  y: -70,
  x: -70,
  rotate: -45,
  opacity: 0,
  ease: "power2.out",
  duration: 1.5,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 2
    // markers: true
  }
});

// Unique animation for colon2 - slide in opposite direction with rotation
gsap.from("#colon2", {
  y: 70,
  x: 70,
  rotate: 45,
  opacity: 0,
  ease: "power2.out",
  duration: 1.5,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 2
    // markers: true
  }
});

gsap.from("#page4 h1", {
  y: 50,
  opacity: 0,
  scale: 0.9,
  rotateX: -45,
  transformOrigin: "top center",
  ease: "power4.out",
  duration: 2,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1.5,
    // markers: true
  }
});

 document.getElementById("arrow").addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });


// Mobile menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

  const revealOnScroll = (elements) => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach(el => observer.observe(el));
  };

  // Collect elements to animate
  const aboutImages = document.querySelectorAll("#about-us img");
  const aboutText = document.querySelectorAll("#about-us-in h3, #about-us-in p");

  revealOnScroll([...aboutImages, ...aboutText]);

  // gsap and scrolltrigger i used in my website