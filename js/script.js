const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-links li');

if(menuBtn && sidebar){
  const tl = gsap.timeline({paused:true});

  tl.to(sidebar,{
    x: 0,
    duration: 0.4,
    ease: 'power3.out'
  });

  tl.from('.nav-links li',{
    x: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3
  }, '-=0.2');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    if(menuBtn.classList.contains('active')){
      tl.play();
    } else {
      tl.reverse();
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      tl.reverse();
    });
  });
}

/* Animations */
gsap.from('.navbar', { y: -40, opacity: 0, duration: 1 });

// Check for homepage elements
if(document.querySelector('.home-text')) {
  gsap.from('.home-text > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, delay: 0.2 });
  gsap.from('.home-image', { scale: 0.9, opacity: 0, duration: 1, delay: 0.5 });
}

// Global page fades
gsap.from('.about-main > *, .cyber-main > *, .contact-main > *', {
  y: 30, opacity: 0, duration: 0.8, stagger: 0.15, delay: 0.2
});

// Changing Text Logic
const changingText = document.querySelector(".changing-text");
if (changingText) {
  const skills = ["intuitive digital experiences", "clean modern websites", "responsive UI designs"];
  let currentIndex = 0;

  function animateText() {
    gsap.to(changingText, {
      y: -10,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currentIndex = (currentIndex + 1) % skills.length;
        changingText.innerText = skills[currentIndex];
        
        gsap.fromTo(changingText, 
          { y: 10, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });
  }
  setInterval(animateText, 3500);
}