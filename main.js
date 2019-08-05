const questionBtn = document.querySelectorAll(".question-btn");

const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-cls");
const popupShow = document.getElementById("show-popup");

const answer1 = document.querySelector(".a1");
const answer2 = document.querySelector(".a2");
const answer3 = document.querySelector(".a3");
const answer4 = document.querySelector(".a4");
const answer5 = document.querySelector(".a5");
const answer6 = document.querySelector(".a6");


popupShow.addEventListener("click", e => {
  e.preventDefault();
  popup.style.display = "inline-block";
});
popupClose.addEventListener("click", () => (popup.style.display = "none"));


questionBtn.forEach(btn => btn.addEventListener("click", showAnswer));

function showAnswer(e) {
  let questionCard = e.target.parentElement.parentElement;
  if (
    questionCard.className.includes("q1") ||
    e.target.className.includes("f1")
  ) {
    answer1.classList.toggle("toggle");
    if(e.target.innerHTML == "&#xf067"){
        e.target.innerHTML = "&#xf068";
    } 
    
  } else if (
    questionCard.className.includes("q2") ||
    e.target.className.includes("f2")
  ) {
    answer2.classList.toggle("toggle");
  } else if (questionCard.className.includes("q3") ||
  e.target.className.includes("f3")) {
    answer3.classList.toggle("toggle");
  } else if (questionCard.className.includes("q4") ||
  e.target.className.includes("f4")) {
    answer4.classList.toggle("toggle");
  } else if (questionCard.className.includes("q5") ||
  e.target.className.includes("f5")) {
    answer5.classList.toggle("toggle");
  } else if (questionCard.className.includes("q6") ||
  e.target.className.includes("f6")) {
    answer6.classList.toggle("toggle");
  }
}
