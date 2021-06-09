// Parallax Effect
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

// Neon effects Header & Stars
const neons_MD = document.querySelectorAll("#neon_md");
const neons_FWD = document.querySelectorAll("#neon_fwd");
const neonsStars_h = document.querySelectorAll(".hf_star");
const neonsStars_c = document.querySelectorAll(".cf_star");
const neonsStars_j = document.querySelectorAll(".jf_star");
const neonsStars_t = document.querySelectorAll(".tf_star");
const neonsStars_r = document.querySelectorAll(".rf_star");
const neonsStars_n = document.querySelectorAll(".nf_star");

const turnOnNeons_Stars = (starsArray) => {
  starsOff = false;
  setInterval(() => {
    starsArray.forEach((el, i) => {
      // On
      setTimeout(() => {
        el.classList.add("neon");
      }, i * 150);
      // Off
      setTimeout(() => {
        setTimeout(() => {
          el.classList.remove("neon");
        }, i * 10);
      }, 2000);
    });
  }, 4000);
};
// --

// --
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
// Skills & Stars effect - show
const showStars = () => {
  const neons_h_stars = document.querySelectorAll("#h_star");
  const neons_c_stars = document.querySelectorAll("#c_star");
  const neons_j_stars = document.querySelectorAll("#j_star");
  const neons_t_stars = document.querySelectorAll("#t_star");
  const neons_r_stars = document.querySelectorAll("#r_star");
  const neons_n_stars = document.querySelectorAll("#n_star");
  let star_speed;
  const showStars_All = (starsArray) => {
    starsArray.forEach((el, i) => {
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
  showStars_All(neons_h_stars);
  showStars_All(neons_c_stars);
  showStars_All(neons_j_stars);
  showStars_All(neons_t_stars);
  showStars_All(neons_r_stars);
  showStars_All(neons_n_stars);
};

const turnOnNeons_Stars_All = () => {
  turnOnNeons_Stars(neonsStars_h);
  turnOnNeons_Stars(neonsStars_c);
  turnOnNeons_Stars(neonsStars_j);
  turnOnNeons_Stars(neonsStars_t);
  turnOnNeons_Stars(neonsStars_r);
  turnOnNeons_Stars(neonsStars_n);
};
// ---
// Are Stars In Viewport?
let starsVisible = true;
let starsOff = true;
const grid_skills = document.querySelector(".grid_skills");
const isInViewport_skills = () => {
  let rect = grid_skills.getBoundingClientRect();
  return rect.top + 120 <= window.innerHeight;
};
const run = () => {
  if (isInViewport_skills(grid_skills) && starsVisible) {
    showStars(); // show stars
    starsVisible = false;
  }
  if (isInViewport_skills(grid_skills) && starsOff) {
    turnOnNeons_Stars_All();
  }
};
window.addEventListener("scroll", run);
window.addEventListener("load", run);
window.addEventListener("resize", run);
isInViewport_skills();
// ---
// Hide header on scroll (add overlay gradient)
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;
let test = true;
window.addEventListener("scroll", () => {
  let st = window.pageYOffset;
  if (st < lastScrollTop) {
    // hide header
    // overlay.style.background = `linear-gradient(
    //   0deg,
    //   rgba(33, 46, 54, ${st / 300}) 0%,
    //   rgba(33, 46, 54, ${st / 700})20%
    // )`;
    navbar.style.transform = "translate(0, 0px)";

    // Show navbar when on Top
    if (window.pageYOffset < 100) {
      navbar.style.transform = "translate(0, 0)";
    }
  } else if (window.innerWidth > 780) {
    // overlay.style.background = `linear-gradient(
    //   0deg,
    //   rgba(33, 46, 54, ${st / 300}) 0%,
    //   rgba(33, 46, 54, ${st / 700})20%
    // )`;
    navbar.style.transform = "translate(0, -100px)";
  }

  lastScrollTop = st;
});
// ---
// show/hide navbar when mouse hight/low
window.addEventListener("mousemove", (el) => {
  if (el.screenY < 280) {
    navbar.style.transform = "translate(0, 0px)";
  } else if (
    el.screenY > 380 &&
    window.pageYOffset > 100 &&
    window.innerWidth > 780
  ) {
    navbar.style.transform = "translate(0, -100px)";
  }
});

// Smooth Scrolling

function smoothScroll(target, duration) {
  // First close hamburger menu

  nav_ul.classList.remove("show");
  const section = document.querySelector(target);
  const sectionPosition = section.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  // const distance = sectionPosition - startPosition;

  let startTime = null;
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
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animationScroll);
}

const home = document.getElementById("nav_home");
const home_bottom = document.getElementById("nav_home_bottom");
const home_ham = document.getElementById("nav_home_ham");
const about = document.getElementById("nav_about");
const projects = document.getElementById("nav_projects");
const contact = document.getElementById("nav_contact");
const contact_form = document.getElementById("contact_form");
const svg_logo = document.querySelectorAll(".svg_logo");

about.addEventListener("click", () => {
  smoothScroll(".about", 1000);
});
projects.addEventListener("click", () => {
  smoothScroll(".projects", 1000);
  setTimeout(() => {}, 1000);
});
home.addEventListener("click", () => {
  smoothScroll(".hero", 1000);
});
home_bottom.addEventListener("click", () => {
  smoothScroll(".hero", 1000);
});
home_ham.addEventListener("click", () => {
  smoothScroll(".hero", 1000);
});

// ---
// Effect on hover over SVG logo
home.addEventListener("mouseover", () => {
  svg_logo.forEach((el) => {
    el.style.fill = "var(--underline-color)";
  });
});
home.addEventListener("mouseout", () => {
  svg_logo.forEach((el) => {
    el.style.fill = "#fff";
  });
});

// Projects - hover effect
const projects_array = document.querySelectorAll(".project");
const covers_array = document.querySelectorAll(".cover");
const img_array = document.querySelectorAll(".project_img");
const info_array = document.querySelectorAll(".info");
const show_box_array = document.querySelectorAll(".show_box");
let project_up = false;
projects_array.forEach((el, i) => {
  el.addEventListener("mouseover", () => {
    covers_array[i].style.transform = "translate(0, 0)";
    img_array[i].style.transform = "scale(1.03)";
    info_array[i].style.transition = "600ms";
    if (window.innerWidth > 470) {
      info_array[i].style.transform = "translate(0,-140px)";
    } else {
      info_array[i].style.transform = "translate(0,-80px)";
    }

    setTimeout(() => {
      show_box_array[i].style.opacity = "1";
      show_box_array[i].style.transform = "translate(0,0)";
    }, 100);
  });

  el.addEventListener("mouseout", () => {
    covers_array[i].style.transform = "translate(-500px, 0)";
    img_array[i].style.transform = "scale(1)";

    setTimeout(() => {
      show_box_array[i].style.opacity = "0";
      show_box_array[i].style.transform = "translate(0,40px)";
    }, 100);

    info_array[i].style.transform = "translate(0,0)";
    info_array[i].style.transition = "1.3s";
  });
});
// ---

// Projects - isInViewport
const isInViewport_projects = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top + 200 <= window.innerHeight;
};

const project_check = () => {
  projects_array.forEach((el, i) => {
    if (isInViewport_projects(el)) {
      setTimeout(() => {
        el.style.transform = "translate(0,0)";
        el.style.opacity = "1";
      }, 350);
    }
  });
};
window.addEventListener("scroll", project_check);
window.addEventListener("load", project_check);
window.addEventListener("resize", project_check);
// ---

// Hover effect Navbar & Footer (links)
const under_text = document.querySelectorAll(".under_text");
const under = document.querySelectorAll(".under");
const under2 = document.querySelectorAll(".under2");
under_text.forEach((el, i) => {
  el.addEventListener("mouseover", () => {
    // adjust length of the underline each time
    let divWidth = el.offsetWidth;
    // ---
    under[i].style.transform = `translate(-${divWidth + 2}px, 0)`;
    under2[i].style.transform = `translate(-${divWidth + 2}px, 0)`;
    under[i].style.transition = `0ms ease-out `;
    under2[i].style.transition = `0ms ease-out `;

    setTimeout(() => {
      under[i].style.background = "var(--underline-color)";
      under[i].style.transition = `200ms ease-out `;
      under[i].style.transform = "translate(0, 0)";
      under2[i].style.background = "var(--line-color)";
      under2[i].style.transition = `250ms ease-out`;
    }, 30);
  });

  el.addEventListener("mouseout", () => {
    let divWidth = el.offsetWidth;
    under2[i].style.transition = `260ms ease-out`;
    under2[i].style.transform = "translate(0px, 0)";

    setTimeout(() => {
      under[i].style.transform = `translate(${divWidth + 2}px, 0)
        `;
      setTimeout(() => {
        under[i].style.transition = `0ms ease-out `;
      }, 15);
    }, 250);
  });
});

// Arrow to the top - footer
const arrow_top = document.querySelector(".arrow_top");
const logo_footer = document.querySelector(".logo_footer");

logo_footer.addEventListener("mouseover", () => {
  arrow_top.style.transform = "translate(0, -30px)";
  arrow_top.style.opacity = "1";
});
logo_footer.addEventListener("mouseout", () => {
  arrow_top.style.transform = "translate(0, 0px)";
  arrow_top.style.opacity = "0";
});
// ---
// Parallax Image About

window.addEventListener("scroll", () => {
  const parallax_bg = document.querySelector(".parallax_bg");
  let scrollPosition = window.pageYOffset;

  parallax_bg.style.transform = `translateY(${scrollPosition * 0.5 - 510}px)`;
});
// contact open / close
const contact_info = document.querySelector(".contact_info");
const form = document.querySelector(".form");
const closeGroup = document.querySelector(".close");
const xButton = document.querySelectorAll(".x");

contact.addEventListener("click", () => {
  contact_form.classList.add("show");
  contact_info.classList.add("show");
  form.classList.add("show");
});
// close X button
closeGroup.addEventListener("click", () => {
  contact_form.classList.remove("show");
  contact_info.classList.remove("show");
  form.classList.remove("show");
});

closeGroup.addEventListener("mouseover", () => {
  xButton.forEach((el) => {
    el.style.background = "var(--line-color)";
    xButton[0].style.transform = "rotate(-135deg)";
    xButton[1].style.transform = "rotate(-45deg)";
  });
});
closeGroup.addEventListener("mouseout", () => {
  xButton.forEach((el) => {
    el.style.background = "#fff";
    xButton[0].style.transform = "rotate(45deg)";
    xButton[1].style.transform = "rotate(135deg)";
  });
});

// Contact - icons interaction
const contact_icons = document.querySelectorAll("#contact_icon");
const contact_texts = document.querySelectorAll("#contact_text");

contact_icons.forEach((el, i) => {
  el.addEventListener("mouseover", () => {
    if (i == 0) el.style.color = "var(--icon-one)";
    if (i == 1) el.style.color = "var(--icon-two)";
    if (i == 2) el.style.color = "var(--icon-three)";
    if (i == 3) el.style.color = "var(--icon-four)";

    contact_texts[i].classList.add("show");
  });

  el.addEventListener("mouseout", () => {
    contact_texts[i].classList.remove("show");
    el.style.color = "var(--dark-color)";
  });
});
// Hamburger menu
const hamburger = document.getElementById("hamburger");
const nav_ul = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  nav_ul.classList.toggle("show");
  nav_ul.style.transition = "transform 450ms ease-in-out";
});
// Hamburger - show - close
const close_hamGroup = document.querySelector(".close_ham");
const yButton = document.querySelectorAll(".y");

// close X button
close_hamGroup.addEventListener("click", () => {
  nav_ul.classList.remove("show");
});

close_hamGroup.addEventListener("mouseover", () => {
  yButton.forEach((el) => {
    el.style.background = "var(--line-color)";
    yButton[0].style.transform = "rotate(-135deg)";
    yButton[1].style.transform = "rotate(-45deg)";
  });
});
close_hamGroup.addEventListener("mouseout", () => {
  yButton.forEach((el) => {
    el.style.background = "#fff";
    yButton[0].style.transform = "rotate(45deg)";
    yButton[1].style.transform = "rotate(135deg)";
  });
});

// Contact form validation
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const form_submit = document.querySelector("form[name='contact-form']");
const thank_you = document.querySelector(".thank_you");
const submit_button = document.querySelector(".submit_button");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let isFormValid = false;
const validateInputs = () => {
  if (nameInput.value && isValidEmail(emailInput.value) && messageInput.value) {
    submit_button.classList.remove("block");
    isFormValid = true;
  } else {
    submit_button.classList.add("block");
    isFormValid = false;
  }
};

form_submit.addEventListener("submit", (el) => {
  console.log("SENT");
  el.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thank_you.classList.remove("hide");
    // AJAX REQUEST HERE
  }
});

form_submit.addEventListener("input", () => {
  validateInputs();
});
