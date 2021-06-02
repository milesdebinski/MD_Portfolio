// Header - Parallax Effect
document.addEventListener("mousemove", parallax);
function parallax(el) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - el.pageX * speed) / 180;
    const y = (window.innerHeight - el.pageY * speed) / 180;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
// ---

// Neon effects - header
const neons_MD = document.querySelectorAll("#neon_md");
const neons_FWD = document.querySelectorAll("#neon_fwd");
const neons_stars = document.querySelectorAll(".star");

const turnOnNeons_Stars = () => {
  starsOff = false;
  setInterval(() => {
    neons_stars.forEach((el, i) => {
      // On
      setTimeout(() => {
        el.classList.add("neon");
      }, i * 200);
      // Off
      setTimeout(() => {
        setTimeout(() => {
          el.classList.remove("neon");
        }, i * 200);
      }, 3200);
    });
  }, 7000);
};

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

// Loop effect
const startWhenLoaded = () => {
  setInterval(() => {
    turnOnNeons_MD();
    turnOnNeons_FWD();
  }, 12500);
  setInterval(() => {
    // turnOnNeons_about();
  }, 4000);
  turnOnNeons_MD();
  turnOnNeons_FWD();
  // turnOnNeons_about();
};
// run after load (good for old devices)
window.addEventListener("load", startWhenLoaded);
// ---
// Skills & Stars effect
const showStars = () => {
  const neons_h_stars = document.querySelectorAll("#h_star");
  const neons_c_stars = document.querySelectorAll("#c_star");
  const neons_j_stars = document.querySelectorAll("#j_star");
  const neons_t_stars = document.querySelectorAll("#t_star");
  const neons_r_stars = document.querySelectorAll("#r_star");
  const neons_n_stars = document.querySelectorAll("#n_star");
  let star_speed;
  const showStars_html = () => {
    neons_h_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  const showStars_css = () => {
    neons_c_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  const showStars_javascript = () => {
    neons_j_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  const showStars_typescript = () => {
    neons_t_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  const showStars_react = () => {
    neons_r_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  const showStars_node = () => {
    neons_n_stars.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("blink");
      }, i * star_speed);
      setTimeout(() => {
        setTimeout(() => {
          el.classList.add("show");
          el.classList.remove("blink");
        }, i * star_speed);
      }, star_speed * 1.5);
    });
  };
  // how fast stars appear on the screen
  star_speed = 250;
  showStars_html();
  showStars_css();
  showStars_javascript();
  showStars_typescript();
  showStars_react();
  showStars_node();
};

// ---
// Are Stars In Viewport?
const grid_skills = document.querySelector(".grid_skills");
let starsVisible = true;
let starsOff = true;
const isInViewport = () => {
  let rect = grid_skills.getBoundingClientRect();
  return rect.top + 120 <= window.innerHeight;
};
const run = () => {
  if (isInViewport(grid_skills) && starsVisible) {
    showStars(); // show stars
    starsVisible = false;
  }
  if (isInViewport(grid_skills) && starsOff) {
    turnOnNeons_Stars();
  }
};
window.addEventListener("scroll", run);

isInViewport();
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

  // easing functions - http://gizma.com/easing/
  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, sectionPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
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
