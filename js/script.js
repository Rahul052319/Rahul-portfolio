const menuBtn=document.querySelector('.menu-btn');
const sidebar=document.querySelector('.sidebar');
const navItems=document.querySelectorAll('.nav-links li');

if(menuBtn && sidebar){

const tl=gsap.timeline({paused:true});

tl.to(sidebar,{
x:0,
duration:.45,
ease:'power3.out'
});

tl.from('.nav-links li',{
x:40,
opacity:0,
stagger:.1,
duration:.35
},'-=.2');

menuBtn.addEventListener('click',()=>{
menuBtn.classList.toggle('active');

if(menuBtn.classList.contains('active')){
tl.play();
}else{
tl.reverse();
}
});

navItems.forEach(item=>{
item.addEventListener('click',()=>{
menuBtn.classList.remove('active');
tl.reverse();
})
})
}

/* animations */
gsap.from('.navbar',{
y:-40,
opacity:0,
duration:1
});

gsap.from('.main-content h1, .main-content h2, .main-content p',{
y:40,
opacity:0,
duration:1,
stagger:.18,
delay:.3
});

gsap.from('button',{
scale:.8,
opacity:0,
stagger:.2,
delay:.9,
duration:.8,
ease:'back.out(1.7)'
});

gsap.from('.about-me,.skills,.contact-main,.footer',{
y:30,
opacity:0,
duration:1,
delay:.6
});

const skills = ["Interactive UIs", "Smooth Animations", "Clean Code"];
const changingText = document.querySelector(".changing-text");

// ONLY run this if the element exists on the current page
if (changingText) {
  const skills = ["Interactive UIs", "Smooth Animations", "Full-Stack Apps", "Clean Code"];
  let currentIndex = 0;

  function animateText() {
    gsap.to(changingText, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currentIndex = (currentIndex + 1) % skills.length;
        changingText.innerText = skills[currentIndex];
        
        gsap.fromTo(changingText, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });
  }

  setInterval(animateText, 3000);
}

