// Smooth Scroll
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// Skill Animation on Scroll
const skillBars = document.querySelectorAll(".progress-bar");

function showSkills() {
    skillBars.forEach(bar => {
        const value = bar.textContent;
        bar.style.width = value;
    });
}

let skillsSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
    const sectionTop = skillsSection.offsetTop - 300;

    if (window.scrollY > sectionTop) {
        showSkills();
    }
});