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
  
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
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
	var morning = ('Petit-déjeuner');
    var midday = ('Déjeuner'); 
	var afternoon = ('Goûter');
	var evening = ('Dîner');
    var night = ('En-cas de minuit');

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


//API Fetch
let getRecipe = document.getElementById('repas');

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "42f52e0604mshb3d6c1be805c155p16d5cfjsnd69640cf5aa9"
	}
})
//.then(response => {
//	console.log(response);
//  
//})
.then (function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
})
.catch(err => {
	console.error(err);
});


const myImage = document.querySelector('img');

fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});