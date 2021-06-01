// Header - Parallax Effect
document.addEventListener("mousemove", parallax);
function parallax(el) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - el.pageX * speed) / 300;
    const y = (window.innerHeight - el.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    // console.log([x, y]);
  });
}
// ---
// Neon effect - Header

const neons_MD = document.querySelectorAll("#neon");
const neons_FWD = document.querySelectorAll("#neon2");
console.log(neons_MD);

const turnOnNeons_MD = () => {
  neons_MD.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 400);

    setTimeout(() => {
      setTimeout(() => {
        el.classList.remove("show");
      }, i * 400);
    }, 5000);
  });
};

const turnOnNeons_FWD = () => {
  neons_FWD.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 240);

    setTimeout(() => {
      setTimeout(() => {
        el.classList.remove("show");
      }, i * 240);
    }, 5000);
  });
};

const startWhenLoaded = () => {
  setInterval(() => {
    turnOnNeons_MD();
    turnOnNeons_FWD();
  }, 12500);
  turnOnNeons_MD();
  turnOnNeons_FWD();
};
