var stats = new Map([
  [237, "Projects Completed"],
  [49, "Happy Customers"],
  [331, "Digital Products Sold"],
  [7, "Years Experience"],
]);

var currentStatistic = 0;

function getNextStatistic() {
  if (isInViewport(document.getElementById("statistics-container"))) {
    var statisticAmount = Array.from(stats.keys())[currentStatistic];
    var statisticTitle = stats.get(statisticAmount);
    updateStatisticDisplay(statisticAmount, statisticTitle);
    updateStatisticCounter();
  }
  setTimeout(getNextStatistic, 3500);
}


function updateStatisticDisplay(amount, title) {
  var statisticDiv = document.getElementById("statistics-container");
  var numberHeader = statisticDiv.getElementsByClassName("countup")[0];
  var textHeader = statisticDiv.getElementsByClassName("countup-header")[0];
  animateValue(numberHeader, 0, amount, 400);
  numberHeader.textContent = amount;
  textHeader.textContent = title;
}

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var timer = setInterval(function () {
    current += increment;
    id.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function countupAll() {
  var targetElements = document.querySelectorAll(".countup");
  console.log("Target:" + targetElements);
  for (var i = 0; i < targetElements.length; i++) {
    var element = targetElements[i];
    var number = parseInt(element.textContent);
    if (number) {
      animateValue(element, 0, number, 400);
    }
  }
}

function updateStatisticCounter() {
  currentStatistic >= stats.size - 1
    ? (currentStatistic = 0)
    : (currentStatistic += 1);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var fills = document.querySelectorAll(".fill");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
  for (var i = 0; i < fills.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = fills[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      fills[i].classList.add("filled");
    }
  }
}

const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");



function lockScroll() {
  if (document.body.style.overflowY === "hidden") {
    document.body.style.overflowY = "visible";
  } else {
    document.body.style.overflowY = "hidden";
    console.log("Locked scroll");
  }
}

document.body.addEventListener("click", (e) => {
  if (
    e.target.closest(".nav-menu") != null ||
    e.target.classList.contains("bar") ||
    e.target.classList.contains("hamburger")
  )
    return;
  if (navMenu.classList.contains("active")) {
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
    lockScroll();
  }
});

window.onresize = function(){
  if(window.innerWidth >= 992 && navMenu.classList.contains("active")){
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
    lockScroll();
  }
}


window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
window.addEventListener("load", countupAll);
window.addEventListener("load", updateQuestionHeader)