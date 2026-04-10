class DigitalClock {
    constructor(element) {
      this.element = element;
    }
  
    start() {
      this.update();
  
      setInterval(() => {
        this.update();
      }, 500);
    }
  
    update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      const timeFormatted = `${parts.hour}:${minuteFormatted}`;
      const amPm = parts.isAm ? "AM" : "PM";
  
      clockElement.textContent = timeFormatted + " " + amPm;
    }
  
    getTimeParts() {
      const now = new Date();
  
      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        isAm: now.getHours() < 12
      };
    }
}
  
const clockElement = document.querySelector(".menu__clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

let thehours = new Date().getHours();
let mealTime = "What meal is it again?";
if (thehours >= 6 && thehours < 11) {
  mealTime = 'Breakfast';
} else if (thehours >= 11 && thehours < 14) {
	mealTime = 'Lunch';
} else if (thehours >= 14 && thehours < 18) {
  mealTime = 'Snack';   
} else if (thehours >= 18 && thehours < 24) {
	mealTime = 'Dinner';
} else if (thehours >= 24 && thehours < 6) {
  mealTime = 'Appetizer';
}

document.querySelector('.menu__meal').append(mealTime);


const month = new Date().getMonth();
let season = "What season is it again?";

switch (month) {
  case 0:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
}

document.querySelector('.season').append(season);