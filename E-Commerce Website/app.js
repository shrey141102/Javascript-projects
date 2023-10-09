const wrapper = document.querySelector(".sliderWrapper");
const Items = document.querySelectorAll(".Item");
Items.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
document.getElementById("color1").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("productImg").src = "./Images/Cap1.png";
}
document.getElementById("color2").addEventListener("click", myFunction1);
function myFunction1() {
  document.getElementById("productImg").src = "./Images/Cap2.png";
}
function sv(id, vi){
  document.getElementById(id).style.display = vi;
}