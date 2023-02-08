const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];



const getWeek = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = (date - yearStart) / 86400000 + 1;
  return Math.ceil(dayOfYear / 7);
};

const goTo = (selectedOption) => {
  if (selectedOption === window.location.href.split("/").pop()) {
    return;
  }
  window.location.href = `/dashboard/${selectedOption}`
  if (window.location.href = `/dashboard/${selectedOption}`){
    document.querySelector(".time-view-select").value === selectedOption
  }
};


const setData = (titleText, infoText) => {
  const title = document.querySelector(".selected-view h3");
  const info = document.querySelector(".selected-view h2");
  title.innerHTML = titleText;
  info.innerHTML = infoText;
};

const moveDisplayedTime = (direction) => {
  const increment = direction === "forward" ? 1 : -1;
  switch (selectedOption) {
    case "day":
      date.setDate(date.getDate() + increment);
      break;
    case "week":
      date.setDate(date.getDate() + increment * 7);
      break;
    case "month":
      date.setMonth(date.getMonth() + increment);
      break;
    case "year":
      date.setFullYear(date.getFullYear() + increment);
      break;
    default:
  }
};

const updateData = () => {
  const dayOfWeek = days[date.getUTCDay()];
  const currentMonth = months[date.getMonth()];
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();
  const formattedDate = `${currentMonth} ${currentDate}, ${currentYear}`;

//   const urlDate = `${currentMonth.slice(0, 3)}-${("0" + currentDate).slice(-2)}-${currentYear}`;
// window.location.href = `/dashboard/${selectedOption}/${urlDate}`;

  switch (selectedOption) {
    case "day":
      setData(dayOfWeek, formattedDate);
      goTo(selectedOption)
      break;
    case "week":
      const weekNumber = getWeek(date);
      const weeksLeft = 52 - weekNumber;
      setData(`week: ${weekNumber}`, `${weeksLeft} weeks left in ${currentYear}`);
      goTo(selectedOption)
      break;
    case "month":
      setData(`this month:`, currentMonth);
      goTo(selectedOption)
      break;
    case "year":
      setData("this year:", currentYear);
      goTo(selectedOption)
      break;
    default:
  }
};

let date = new Date();
let selectedOption = document.querySelector(".time-view-select").value;
const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");

updateData();

forwardBtn.addEventListener("click", () => {
  moveDisplayedTime("forward");
  updateData();
  });
  
  backwardBtn.addEventListener("click", () => {
  moveDisplayedTime("backward");
  updateData();
  });
  
  document.querySelector(".time-view-select").addEventListener("change", (event) => {
  selectedOption = event.target.value;
  updateData();
  });
