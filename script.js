window.addEventListener("mousemove", function (dets) {
  let rect = document.querySelector("#rect");
  let opacityText = document.querySelector("#opacityText");
  let mousePosition = dets.clientX;
  let rectWidth = rect.getBoundingClientRect().width;
  let xposition = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rectWidth / 2,
    window.innerWidth - (100 + rectWidth / 2),
    mousePosition
  );


  let center = window.innerWidth / 2;
  let distanceFromCenter = Math.abs(center - mousePosition);

  
  let maxOpacity = 1; 
  let opacity = 1 - distanceFromCenter / center;
  let opacityPercentage = Math.round(opacity * 100); 
  opacityText.textContent = `Opacity = ${opacityPercentage}%`; 


  opacityText.style.opacity = 1;

  gsap.to("#rect", {
    left: xposition + "px",
    opacity: opacity,
    ease: "power4",
  });


  opacityText.style.left = xposition + "px";
  opacityText.style.top = "20px"; 
});
