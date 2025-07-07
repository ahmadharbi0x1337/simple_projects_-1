// A Simple Method But Lacks The Feature To Close Any Other Questions.
// Because We Are Here Utilizing the parent Element Of All The Questions Not The Direct Parent Element
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    // Close Any Other Question
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    // Toggle Only The Clicked One.
    question.classList.toggle("show-text");
  });
});
