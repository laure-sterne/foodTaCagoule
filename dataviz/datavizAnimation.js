//horloge
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
  
      this.element.querySelector(".clockTime").textContent = timeFormatted;
      this.element.querySelector(".clockAmpm").textContent = amPm;
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
  
  const clockElement = document.querySelector(".clock");
  const clockObject = new DigitalClock(clockElement);
  
  clockObject.start();
  

// changement du type de repas selon l'heure
var thehours = new Date().getHours();
	var themessage;
	var morning = ('Breakfast');
  var midday = ('Lunch'); 
	var afternoon = ('Snack');
	var evening = ('Dinner');
  var night = ('Appetizer');

	if (thehours >= 6 && thehours < 11) {
		themessage = morning; 

	} else if (thehours >= 11 && thehours < 14) {
		themessage = midday;

    } else if (thehours >= 14 && thehours < 18) {
        themessage = afternoon

	} else if (thehours >= 18 && thehours < 24) {
		themessage = evening;

	} else if (thehours >=24 && thehours < 6) {
        themessage = night;
    }

	document.getElementById('typeMeal').append(themessage);

// changement saison selon la date
//var day = new Date().getDate
   //var season;
   //var
    
    //if (myNum <= 15){
      
    //} else if {
      
    //} else if {
        
    //} 

    //document.getElementById('season').innerHTML = "Saison :" + season