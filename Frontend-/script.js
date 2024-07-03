// Adding event listener to toggle goal sections
document.addEventListener("DOMContententLoaded", function () {
  const goalSections = document.querySelectorAll(".goal-section");
  goalSections.forEach((section) => {
    section.addEventListener("click", function () {
      section.classList.toggle("active");
    });
  });
});

// Displaying currentLocaletITime to Visitors
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

const localTime = `${hours.toString().padStart(2, "0")}:${minutes
  .toString()
  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
document.querySelector(`[data-testid="currentTimeUTC"]`).innerHTML = localTime;

// Lets Greeting 'em folks
let greeting;

if (hours >= 6 && hours < 12) {
  greeting = "Andyy says Good Morning";
} else if (hours >= 12 && hours < 17) {
  greeting = "Andyy says Good Afternoon";
} else if (hours >= 17 && hours < 24) {
  greeting = "Andyy says Good Evening";
} else {
  greeting = "Andyy says You should be in bed";
}
document.querySelector(`[data-testid="greeting"]`).innerHTML = greeting;

// Lets get the days
const day = currentTime.toLocaleDateString("en-US", { weekday: "long" });
document.querySelector(`[data-testid="currentDay"]`).innerHTML = day;
