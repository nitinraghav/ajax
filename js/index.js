var pageCounter= 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");


btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' +pageCounter+'.json');
    ourRequest.onload = function() {
	   var ourData = JSON.parse(ourRequest.responseText);
	   renderHTML(ourData);
	   
    };
    ourRequest.send();
    pageCounter++;
    
    if (pageCounter > 3) {
    	btn.classList.add("hide-me");
    }
});


var renderHTML = function (data) {
	var htmlstring ="";
	
	for (var i = 0; i < data.length; i++) {
	  htmlstring += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
	  for (var j = 0; j < data[i].foods.likes.length; j++) {
	  	if (j === 0) {
	  		htmlstring += data[i].foods.likes[j];
	  	} else {
	  		htmlstring += " and " + data[i].foods.likes[j];
	  	}
	  }
	  
	  htmlstring += " and dislikes ";
	  
	  
	  for (var j = 0; j < data[i].foods.dislikes.length; j++) {
	  	if (j === 0) {
	  		htmlstring += data[i].foods.dislikes[j];
	  	} else {
	  		htmlstring += " and " + data[i].foods.dislikes[j];
	  	}
	  }
	 htmlstring += ".</p>";
	  
	}
	
	animalContainer.insertAdjacentHTML('beforeend', htmlstring)
};