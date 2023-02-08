// dailyview navtab bar (today, this week, this month, this year)
document.addEventListener("DOMContentLoaded", () => {
    const pills = document.querySelectorAll(".nav-pills .nav-link");
    pills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.preventDefault();
        const pillId = pill.getAttribute("href");
        const pillContent = document.querySelector(pillId);
        const activePills = document.querySelectorAll(
          ".nav-pills .nav-link.active"
        );
        activePills.forEach((activePill) =>
          activePill.classList.remove("active")
        );
        pill.classList.add("active");
        Array.from(document.querySelectorAll(".tab-pane")).forEach(
          (tabPane) => (tabPane.style.display = "none")
        );
        pillContent.style.display = "block";
      });
    });
  });
  // -----------------------------------------------------------------------
  
  // daily tasks
//   const doneTaskAniBtn = document.querySelector("#done-task-animation");
//   const progressBar = document.querySelector(".progress-bar");
//   const check = document.querySelector("#done-task-animation i");
  
//   doneTaskAniBtn.addEventListener("click", () => {
//     progressBar.style.width = "100%";
//     check.style.visibility = "visible";
//     document.querySelector(".task-color").classList.remove("text-primary");
//     document.querySelector(".task-color").classList.add("text-light");
//     document.querySelector(".border-color").classList.remove("border-primary");
//     document.querySelector(".border-color").classList.add("border-light");
//   });
  // -----------------------------------------------------------------------
  