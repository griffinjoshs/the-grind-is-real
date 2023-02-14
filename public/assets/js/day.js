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

  // const changeUrl = (selectedOption, selectedTime) => {
  //   try {
  //     // Your code here
  //   } catch (error) {
  //     console.error(error);
  //     // Do nothing
  //   }
    

  //   if (selectedOption === window.location.href.split("/").pop()) {
  //     return;
  //   }
  //   window.location.href = `/dashboard/${selectedOption}`
  //   if (window.location.href = `/dashboard/${selectedOption}/${selectedTime}`){
  //     console.log(`/dashboard/${selectedOption}/${selectedTime}`)
  //     document.querySelector(".time-view-select").value === selectedOption
  //   }
  // }
  
// Get the date from the h2 element

// let originalDate = document.querySelector(".selected-view h2").textContent;
// let newDate = convertDate(originalDate);
// console.log(newDate); 
// Output: 02-08-2020

// Use the date to navigate to the dashboard/day page
// window.location.href = `/dashboard/day/${HTMLDate}`;



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
  