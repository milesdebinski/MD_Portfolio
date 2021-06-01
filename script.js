// Header - Parallax Effect
document.addEventListener("mousemove", parallax);
function parallax(el) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - el.pageX * speed) / 300;
    const y = (window.innerHeight - el.pageY * speed) / 180;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
// ---

// Neon effect - Header
const neons_MD = document.querySelectorAll("#neon");
const neons_FWD = document.querySelectorAll("#neon2");

const turnOnNeons_MD = () => {
  neons_MD.forEach((el, i) => {
    // On
    setTimeout(() => {
      el.classList.add("show");
    }, i * 400);
    // Off
    setTimeout(() => {
      setTimeout(() => {
        el.classList.remove("show");
      }, i * 400);
    }, 5000);
  });
};

const turnOnNeons_FWD = () => {
  neons_FWD.forEach((el, i) => {
    // On
    setTimeout(() => {
      el.classList.add("show");
    }, i * 240);
    // Off
    setTimeout(() => {
      setTimeout(() => {
        el.classList.remove("show");
      }, i * 240);
    }, 5000);
  });
};
// Loop neons effect
const startWhenLoaded = () => {
  setInterval(() => {
    turnOnNeons_MD();
    turnOnNeons_FWD();
  }, 12500);
  turnOnNeons_MD();
  turnOnNeons_FWD();
};
window.addEventListener("load", startWhenLoaded);
// ---

// Hide header on scroll
const overlay = document.querySelector(".overlay");
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let st = window.pageYOffset;
  if (st < lastScrollTop) {
    overlay.style.background = `linear-gradient(
      0deg,
      rgba(33, 46, 54, ${st / 800}) 0%,
      rgba(33, 46, 54, ${st / 1000}) 60%
    )`;
  } else {
    overlay.style.background = `linear-gradient(
      0deg,
      rgba(33, 46, 54, ${st / 800}) 0%,
      rgba(33, 46, 54, ${st / 1000}) 60%
    )`;
  }
  lastScrollTop = st;
});
// ---

// Smooth Scrolling
function smoothScroll(target, duration) {
  const section = document.querySelector(target);
  const sectionPosition = section.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = sectionPosition - startPosition;

  let startTime = null;
  console.log(`
  sectionPosition=${sectionPosition},
  startPosition=${startPosition},
  
  distance=${distance},`);

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, sectionPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

const home = document.getElementById("nav_home");
const about = document.getElementById("nav_about");
const projects = document.getElementById("nav_projects");
const contact = document.getElementById("nav_contact");
about.addEventListener("click", () => {
  smoothScroll(".about", 1000);
});
projects.addEventListener("click", () => {
  smoothScroll(".projects", 1000);
});
home.addEventListener("click", () => {
  smoothScroll(".hero", 1000);
});
// ---
