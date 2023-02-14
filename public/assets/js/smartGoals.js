let overallPlan = "fuck bitches, get money";
let goalArray = [];
const setArray = (type, goal) => {
  let index = 0;
  if (goalArray.length === 0) {
    goalArray.push({ [type]: goal });
  } else {
    index = goalArray.length - 1;
    goalArray[index][type] = goal;
  }
};
let howAmIDoing = document.querySelector(".how-am-I-doing");
let widthPercent = 0;
let progressBar = document.querySelector(".progress-bar");
const showGoal = () => {
  document.querySelector(".display-goal").innerHTML = goalArray[0].specific;
};
const progressBarPercent = (type) => {
  showGoal();
  switch (type) {
    case "specific":
      widthPercent = 81;
      if (widthPercent <= 35) {
        progressBar.classList.add("bg-danger");
        howAmIDoing.innerHTML = "Too broad, Be more specific";
      } else if (widthPercent > 35 && widthPercent <= 80) {
        progressBar.classList.add("bg-warning");
        howAmIDoing.innerHTML = "Ok, but you should be more specific";
      } else if (widthPercent >= 80) {
        progressBar.classList.add("bg-success");
        howAmIDoing.innerHTML = "Super Specific, let's go!!!";
      }
      break;
    case "achievable":
      widthPercent = 50;
      if (widthPercent <= 35) {
        progressBar.classList.add("bg-danger");
        howAmIDoing.innerHTML = "This is just too much";
      } else if (widthPercent > 35 && widthPercent <= 80) {
        progressBar.classList.add("bg-warning");
        howAmIDoing.innerHTML = "Better, but your Still tryna bite off more than u could chew";
      } else if (widthPercent >= 80) {
        progressBar.classList.add("bg-success");
        howAmIDoing.innerHTML = "Very Achievable";
      }
      break;
    case "relevant":
      widthPercent = 60;
      if (widthPercent <= 35) {
        progressBar.classList.add("bg-danger");
        howAmIDoing.innerHTML = "This is just too much";
      } else if (widthPercent > 35 && widthPercent <= 80) {
        progressBar.classList.add("bg-warning");
        howAmIDoing.innerHTML = "Better, but your Still tryna bite off more than u could chew";
      } else if (widthPercent >= 80) {
        progressBar.classList.add("bg-success");
        howAmIDoing.innerHTML = "Very Achievable";
      }
      break;
    default:
      break;
  }
  progressBar.style.width = widthPercent + "%";
};
const specificInputField = document.querySelector("#specific-goal");
const specificButton = document.querySelector("#specificButton");
const measurableButton = document.querySelector("#measurableButton");