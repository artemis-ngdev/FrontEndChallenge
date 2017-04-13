 
		
 var cars = ["Audi", "Impala", "BMW", "Ford"];
// var text = "";
//	
// list: {
//	 
//	text += cars[0]+ "<br>";
//	text += cars[1]+ "<br>";
//	text += cars[2] + "<br>";
//	text += cars[3] + "<br>";
//	text += cars[4] + "<br>";
//	text += cars[5] + "<br>";
// }
//document.getElementById("demo").innerHTML= text; 
// 
// 
 
  for (var i=0; i< cars.length; i++) {
	 	document.getElementById("demo").innerHTML = cars[i];
 }
 
 
 
 

function hitMe() {
        var age , adult;
        age = parseInt(document.getElementById("age").value);
        adult = (age<18) ? "You are not adult" : "You are adult";
      //  document.getElementById("demo").innerHTML = adult;
    
    };
	
	function checkEligibility() {
	var a = parseInt(document.getElementById("age").value);
	if (a >= 18) {
		//document.write("<b>you are eligible for a driving lisence</b>");
		document.getElementById("eligibility").innerHTML = "you CAN DRIVE";
	} else {

		document.getElementById("eligibility").innerHTML = "you CAN NOT DRIVE";
    }


	 
	
	

	}
 
	 