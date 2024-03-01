const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});//locomotive
function videoAnimation(){
    let videocon=document.querySelector('#video-container')
let play=document.querySelector('#play')
videocon.addEventListener('mouseenter',function(){
    gsap.to(play,{
        opacity:1,
        scale:1
    })
})
videocon.addEventListener('mouseleave',function(){
    gsap.to(play,{
        opacity:0,
        scale:0
    })
})

videocon.addEventListener('mousemove',function(dets){
    gsap.to(play,{
        left:dets.x-70+"px",
        top:dets.y-70+"px",
    })
})
}
videoAnimation();

function headingLoadingAnimation(){
gsap.from('#page1 h1',{
    y:100,
    yoyo:true,
    duration:0.8,
    delay:0.2,
    stagger:1,
    opacity:-5
})
gsap.from('#page1 #video-container',{
    y:140,
    delay:1.5,
    duration:0.8,
})
}
headingLoadingAnimation();

function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveanimation();
gsap.to('#nav-start svg',{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:'top 0',
        end:'top -10%',
        scrub:true,
    }
})
gsap.to('#nav-center',{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:'top 0',
        end:'top -10%',
        scrub:true,
    }
})


let one=document.querySelector('#labels-desc')
document.querySelector('#label1').addEventListener('click',function(){
    one.innerHTML="<h1>THANK YOU SO MUCH FOR THIS<br>BEAUTIFUL CARERING IT MEANS<br>A LOT WORKING WITH A<br>COMPANY SUCH AS TWO GOOD<br>CO.</h1>"
})

document.querySelector('#label2').addEventListener('click',function(){
    one.innerHTML="<h1>THE HAMPERS WE ORDERED<br> WERE LOVELY AND THE TEAM<br>ARE WONDERFUL TO LIAISE<br>WITH.</h1>"
})

document.querySelector('#label3').addEventListener('click',function(){
    one.innerHTML="<h1>MY PACKAGE JUST ARRIVED<br>AND THE PRESENTATION IS SO<br>BEAUTIFUL; ELEGANT, MAGICAL<br>AND MEANINGFUL, WITH THE<br>ITEMS WRAPPED IN<br>DELICIOUS-SMELLING TISSUE<br>PAPER. GORGEOUS; WILL BE<br>BACK FOR MORE.</h4>"
})
document.querySelector('#label4').addEventListener('click',function(){
    one.innerHTML="<h1>I THINK I SPEAK FOR EVERYONE<br>WHEN I SAY WE ARE VERY<br>GRATEFUL TO HAVE BEEN ABLE<br>TO COME IN AND HELP OUT FOR<br>THE DAY; THE WORK YOU DO IS<br>AMAZING.</h1>"
})
document.querySelector('#label5').addEventListener('click',function(){
    one.innerHTML="<h1>EVERYONE AT TWO GOOD ARE<br>LOVELY TO WORK WITH.<br>CATERING WAS EXCELLENT AND<br>WELL PRICED, ALL FOR A GOOD<br>CAUSE... WHAT'S NOT TO LOVE?</h1>"
})
document.querySelector('#label6').addEventListener('click',function(){
    one.innerHTML="<h1>MY CEO ASKED ME WHO I HAD<br>USED FOR THE CATERING; WHEN<br>I EXPLAINED ABOUT TWO<br>GOOD, SHE SAID OHTHAT’S<br>WHY - THE FOOD IS MADE WITH<br>LOVE.</h1>"
})
gsap.from('#page6',{
    y:100,
    yoyo:true,
    duration:2,
    delay:0.2,
    stagger:2,
    opacity:-5,
})