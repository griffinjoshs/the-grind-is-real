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

// let monthNumber = (months.indexOf(month) + 1).toString().padStart(2, '0');

const getWeek = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = (date - yearStart) / 86400000 + 1;
  return Math.ceil(dayOfYear / 7);
};

// const goTo = (selectedOption, 
//   // selectedTime
//   ) => {

//     if (selectedOption === window.location.href.split("/").pop()) {
//       return;
//     }

//     let url = `/dashboard/${selectedOption}`
// // /${selectedTime}
//     window.location.href = url
//     if (window.location.href = url){
//       console.log(url)
//       document.querySelector(".time-view-select").value === selectedOption
//     }
  
    // Todo -------------------------------------------------------------------

    // make selectedTime work properly the end of the url so we can divide everything up into proper dates 

    // make it that every date combination will have its own page and all we have to do is change the url in our browser (/02-05-2023 or 11/2022) 
    // to get the time slot we need, even if its like 1964 or some shit

    // get the data for each date combination for the page and send it from the database (which needs to be created) to the client
    // if (date in url = date found In The Database){
    //   // send data back that specific to the client
    // } else {
    //   // no data
    // }

    // see under for some details of how to proceed
// };

console.log(window.location.href)

const goTo = (selectedOption, selectedTime) => {
  console.log(selectedTime)
  console.log("selected Option: " + selectedOption)
    if (selectedOption === window.location.href.split("/").pop()) {
      console.log(window.location.href.split("/").pop())
      return;
    }
    
    let url = `/dashboard/${selectedOption}`
    let url2 = `/dashboard/${selectedOption}/${selectedTime}`
    console.log(url2)
    window.location.href = url
    if (window.location.href = url){
      console.log(url)
      document.querySelector(".time-view-select").value === selectedOption
    }

    // Todo -------------------------------------------------------------------

    // make selectedTime work properly the end of let url so we can divide everything up into proper dates and send that to the backend so we can access the data and create each route

    // make it that every date combination will have its own page and all we have to do is change the url in our browser (/02-05-2023 or 11/2022) 
    // to get the time slot we need, even if its like 1964 or some shit
    // get the data for each date combination for the page and send it from the database (which needs to be created) to the client
    // if (date in url = date found In The Database){
    //   // send data back that specific to the client
    // } else {
    //   // no data
    // }
};

// goTo()

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
  
  const monthNumber = (months.indexOf(currentMonth) + 1).toString().padStart(2, '0');
  const dayNumber = currentDate.toString().padStart(2, '0');
  const numberFormatDate = `${monthNumber}-${dayNumber}-${currentYear}`;
  const justMonthandYear = `${monthNumber}-${currentYear}`
  console.log(numberFormatDate)

  switch (selectedOption) {
    case "day":
      setData(dayOfWeek, formattedDate);
      goTo(selectedOption , numberFormatDate)
      break;
    case "week":
      const weekNumber = getWeek(date);
      const weeksLeft = 52 - weekNumber;
      setData(`week: ${weekNumber}`, `${weeksLeft} weeks left in ${currentYear}`);
      goTo(selectedOption, weekNumber)
        // )
      break;
    case "month":
      setData(`this month:`, currentMonth);
      goTo(selectedOption, justMonthandYear)
      break;
    case "year":
      setData("this year:", currentYear);
      goTo(selectedOption, currentYear)
      break;
    default:
  }
};


let date = new Date();
console.log(date)
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


