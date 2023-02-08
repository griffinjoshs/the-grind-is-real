// modal scripts
const addGoalBtn = document.querySelector(".add-your-own-goal-btn");
addGoalBtn.addEventListener("click", (e) => {
  document.querySelector(".pick-goal-container").classList.add("d-none");
  document.querySelector(".add-goal-container").classList.remove("d-none");
});
// -----------------------------------------------------------------------
