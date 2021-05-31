// Header - Parallax Effect
document.addEventListener("mousemove", parallax);
function parallax(el) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - el.pageX * speed) / 300;
    const y = (window.innerHeight - el.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    console.log([x, y]);
  });
}
// ---
