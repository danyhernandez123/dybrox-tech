const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.classList.add("navbar-scrolled");
    }else{
        navbar.classList.remove("navbar-scrolled");
    }
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(sectionTop < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

revealSections();
const counters = document.querySelectorAll(".counter");

function animateCounters(){

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let current = 0;

        const increment = target / 60;

        const updateCounter = () => {

            if(current < target){

                current += increment;

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

}

animateCounters();
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});